import * as types from '../constants/actionTypes';
import { CCY1, CCY2 } from '../constants/common';
import initialState from '../store/initialState';
import * as utils from '../utils';


export const changeFocusReducer = (state, action) => {
  const { id: base } = action;
  const counter = utils.getCounter(base);
  const rate = utils.isCcy1(base) ? state.rate : 1 / state.rate;

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

  /simulateTick/.test(window.location.search) && utils.simulateTick(rates);

  const base = ccy1.focused ? CCY1 : CCY2;
  const baseRate = utils.getBaseRate(ccy1.code, ccy2.code, rates);
  const rate = utils.getRate(ccy1.focused, baseRate);
  const counter = utils.getCounter(base);
  const convertedValue = utils.applyRate(state[base].value, rate);

  return {
    ...state,
    baseRate,
    rate,
    rates,
    [counter]: {
      ...state[counter],
      value: convertedValue,
      formatted: utils.formatCurrencyOutput(convertedValue),
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
  const counter = utils.getCounter(base);
  const parsedValue = utils.parseCurrency(value);
  const convertedValue = utils.applyRate(parsedValue, rate);
  const fee = utils.getFee(parsedValue, state.fee, rate);

  return {
    ...state,
    rate,
    [base]: {
      ...state[base],
      focused: true,
      fee: 0,
      value: Number(parsedValue),
      formatted: utils.formatCurrencyOutput(parsedValue),
    },
    [counter]: {
      ...state[counter],
      focused: false,
      fee,
      value: convertedValue + fee,
      formatted: utils.formatCurrencyOutput(convertedValue + fee),
    }
  };
};

export const invertCurrencyReducer = state => {
  const { [CCY1]: ccy1, [CCY2]: ccy2, rates } = state;
  const baseRate = utils.getBaseRate(ccy2.code, ccy1.code, rates);
  const rate = utils.getRate(ccy1.focused, baseRate);

  return {
    ...state,
    baseRate,
    rate,
    [CCY1]: {
      ...ccy1,
      code: ccy2.code,
      value: utils.getValue(ccy1, ccy2, rate),
      formatted: utils.getFormatted(ccy1, ccy2, rate),
    },
    [CCY2]: {
      ...ccy2,
      code: ccy1.code,
      value: utils.getValue(ccy2, ccy1, rate),
      formatted: utils.getFormatted(ccy2, ccy1, rate),
    },
  };
};

export const changeCcy1CodeReducer = (state, action) => {
  const { [CCY1]: ccy1, [CCY2]: ccy2, rates } = state;
  const baseRate = utils.getBaseRate(action.code, ccy2.code, rates);
  const rate = utils.getRate(ccy1.focused, baseRate);

  return {
    ...state,
    baseRate,
    rate,
    [CCY1]: {
      ...ccy1,
      code: action.code,
      value: utils.getValue(ccy1, ccy2, rate),
      formatted: utils.getFormatted(ccy1, ccy2, rate),
    },
    [CCY2]: {
      ...ccy2,
      value: utils.getValue(ccy2, ccy1, rate),
      formatted: utils.getFormatted(ccy2, ccy1, rate),
    }
  };
};

export const changeCcy2CodeReducer = (state, action) => {
  const { [CCY1]: ccy1, [CCY2]: ccy2, rates } = state;
  const baseRate = utils.getBaseRate(ccy1.code, action.code, rates);
  const rate = utils.getRate(ccy1.focused, baseRate);

  return {
    ...state,
    baseRate,
    rate,
    [CCY1]: {
      ...ccy1,
      value: utils.getValue(ccy1, ccy2, rate),
      formatted: utils.getFormatted(ccy1, ccy2, rate),
    },
    [CCY2]: {
      ...ccy2,
      code: action.code,
      value: utils.getValue(ccy2, ccy1, rate),
      formatted: utils.getFormatted(ccy2, ccy1, rate),
    }
  };
};

export const changeCurrencyCodeReducer = (state, action) => {
  const { id: base, code } = action;
  const counter = utils.getCounter(base);
  const counterCode = state[counter].code;
  const isInverted = counterCode === code;

  if (isInverted) {
    return invertCurrencyReducer(state);
  }

  if (utils.isCcy1(base)) {
    return changeCcy1CodeReducer(state, action);
  }

  if (utils.isCcy2(base)) {
    return changeCcy2CodeReducer(state, action);
  }

  return state;
};

export const swapCurrencyReducer = state => {
  const { [CCY1]: ccy1, [CCY2]: ccy2, rates } = state;
  const rate = utils.getBaseRate(ccy2.code, ccy1.code, rates);

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
    case types.CHANGE_FOCUS:
      return changeFocusReducer(state, action);
    case types.FETCH_CURRENCY_RATES_SUCCESS:
      return fetchCurrencyRatesSuccessReducer(state, action);
    case types.FETCH_CURRENCY_RATES_ERROR:
      return fetchCurrencyRatesErrorReducer(state, action);
    case types.CHANGE_CURRENCY_VALUE:
      return changeCurrencyValueReducer(state, action);
    case types.CHANGE_CURRENCY_CODE:
      return changeCurrencyCodeReducer(state, action);
    case types.SWAP_CURRENCY:
      return swapCurrencyReducer(state, action);
    case types.EXCHANGE_AMOUNT:
      return exchangeAmountReducer(state, action);
    default:
      return state;
  }
};
