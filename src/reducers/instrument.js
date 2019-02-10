import {
  CHANGE_CURRENCY_CODE,
  CHANGE_CURRENCY_VALUE,
  CHANGE_FOCUS,
  EXCHANGE_AMOUNT,
  FETCH_CURRENCY_RATES_SUCCESS,
  FETCH_CURRENCY_RATES_ERROR,
  SWAP_CURRENCY,
} from '../actions/instrument';
import { CCY1, CCY2 } from '../constants';
import initialState from '../store/initialState';
import {
  applyRate,
  getCounter,
  getBaseRate,
  getFormatted,
  getFee,
  getRate,
  getValue,
  formatCurrencyOutput,
  isCcy1,
  isCcy2,
  parseCurrency,
  simulateTick,
} from '../utils';


export const changeFocusReducer = (state, action) => {
  const { id: base } = action;
  const counter = getCounter(base);
  const rate = isCcy1(base) ? state.rate : 1 / state.rate;

  return {
    ...state,
    rate,
    [base]: {
      ...state[base],
      focused: true
    },
    [counter]: {
      ...state[counter],
      focused: false
    }
  };
};

export const fetchCurrencyRatesSuccessReducer = (state, action) => {
  const { [CCY1]: ccy1, [CCY2]: ccy2 } = state;
  const { rates } = action;

  /simulateTick/.test(window.location.search) && simulateTick(rates);

  const base = ccy1.focused ? CCY1 : CCY2;
  const baseRate = getBaseRate(ccy1.code, ccy2.code, rates);
  const rate = getRate(ccy1.focused, baseRate);
  const counter = getCounter(base);
  const convertedValue = applyRate(state[base].value, rate);

  return {
    ...state,
    baseRate,
    rate,
    rates,
    [counter]: {
      ...state[counter],
      value: convertedValue,
      formatted: formatCurrencyOutput(convertedValue),
    }
  };
};

export const fetchCurrencyRatesErrorReducer = state => {
  return {
    ...state,
    rate: 0,
    rates: {},
  };
};

export const changeCurrencyValueReducer = (state, action) => {
  const { rate } = state;
  const { id: base, value } = action;
  const counter = getCounter(base);
  const parsedValue = parseCurrency(value);
  const convertedValue = applyRate(parsedValue, rate);
  const fee = getFee(parsedValue, state.fee, rate);

  return {
    ...state,
    rate,
    [base]: {
      ...state[base],
      focused: true,
      fee: 0,
      value: Number(parsedValue),
      formatted: formatCurrencyOutput(parsedValue),
    },
    [counter]: {
      ...state[counter],
      focused: false,
      fee,
      value: convertedValue + fee,
      formatted: formatCurrencyOutput(convertedValue + fee),
    }
  };
};

export const invertCurrencyReducer = state => {
  const { [CCY1]: ccy1, [CCY2]: ccy2, rates } = state;
  const baseRate = getBaseRate(ccy2.code, ccy1.code, rates);
  const rate = getRate(ccy1.focused, baseRate);

  return {
    ...state,
    baseRate,
    rate,
    [CCY1]: {
      ...ccy1,
      code: ccy2.code,
      value: getValue(ccy1, ccy2, rate),
      formatted: getFormatted(ccy1, ccy2, rate),
    },
    [CCY2]: {
      ...ccy2,
      code: ccy1.code,
      value: getValue(ccy2, ccy1, rate),
      formatted: getFormatted(ccy2, ccy1, rate),
    },
  };
};

export const changeCcy1CodeReducer = (state, action) => {
  const { [CCY1]: ccy1, [CCY2]: ccy2, rates } = state;
  const baseRate = getBaseRate(action.code, ccy2.code, rates);
  const rate = getRate(ccy1.focused, baseRate);

  return {
    ...state,
    baseRate,
    rate,
    [CCY1]: {
      ...ccy1,
      code: action.code,
      value: getValue(ccy1, ccy2, rate),
      formatted: getFormatted(ccy1, ccy2, rate),
    },
    [CCY2]: {
      ...ccy2,
      value: getValue(ccy2, ccy1, rate),
      formatted: getFormatted(ccy2, ccy1, rate),
    }
  };
};

export const changeCcy2CodeReducer = (state, action) => {
  const { [CCY1]: ccy1, [CCY2]: ccy2, rates } = state;
  const baseRate = getBaseRate(ccy1.code, action.code, rates);
  const rate = getRate(ccy1.focused, baseRate);

  return {
    ...state,
    baseRate,
    rate,
    [CCY1]: {
      ...ccy1,
      value: getValue(ccy1, ccy2, rate),
      formatted: getFormatted(ccy1, ccy2, rate),
    },
    [CCY2]: {
      ...ccy2,
      code: action.code,
      value: getValue(ccy2, ccy1, rate),
      formatted: getFormatted(ccy2, ccy1, rate),
    }
  };
};

export const changeCurrencyCodeReducer = (state, action) => {
  const { id: base, code } = action;
  const counter = getCounter(base);
  const counterCode = state[counter].code;
  const isInverted = counterCode === code;

  if (isInverted) {
    return invertCurrencyReducer(state);
  }

  if (isCcy1(base)) {
    return changeCcy1CodeReducer(state, action);
  }

  if (isCcy2(base)) {
    return changeCcy2CodeReducer(state, action);
  }

  return state;
};

export const swapCurrencyReducer = state => {
  const { [CCY1]: ccy1, [CCY2]: ccy2, rates } = state;
  const rate = getBaseRate(ccy2.code, ccy1.code, rates);

  return {
    ...state,
    baseRate: rate,
    rate,
    [CCY1]: ccy2,
    [CCY2]: ccy1,
  };
};

export const exchangeAmountReducer = state => {
  const { [CCY1]: ccy1, [CCY2]: ccy2, pockets } = state;
  const updatedBasePocket = pockets[ccy1.code] - ccy1.value;
  const updatedCounterPocket = pockets[ccy2.code] + ccy2.value;

  return {
    ...state,
    [CCY1]: {
      ...ccy1,
      value: '',
      formatted: '',
    },
    [CCY2]: {
      ...ccy2,
      value: '',
      formatted: '',
    },
    pockets: {
      ...pockets,
      [ccy1.code]: updatedBasePocket,
      [ccy2.code]: updatedCounterPocket,
    },
  };
};


export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FOCUS:
      return changeFocusReducer(state, action);
    case FETCH_CURRENCY_RATES_SUCCESS:
      return fetchCurrencyRatesSuccessReducer(state, action);
    case FETCH_CURRENCY_RATES_ERROR:
      return fetchCurrencyRatesErrorReducer(state, action);
    case CHANGE_CURRENCY_VALUE:
      return changeCurrencyValueReducer(state, action);
    case CHANGE_CURRENCY_CODE:
      return changeCurrencyCodeReducer(state, action);
    case SWAP_CURRENCY:
      return swapCurrencyReducer(state, action);
    case EXCHANGE_AMOUNT:
      return exchangeAmountReducer(state, action);
    default:
      return state;
  }
};
