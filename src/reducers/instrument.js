import {
  CHANGE_CURRENCY_VALUE,
  CHANGE_CURRENCY_CODE,
  SWAP_CURRENCY,
  EXCHANGE_AMOUNT,
  FETCH_CURRENCY_RATES_SUCCESS,
} from '../actions/instrument';
import initialState from '../store/initialState';
import {
  getCounter,
  applyRate,
  getRate,
  parseCurrency,
  formatCurrencyOutput,
  isCcy1,
  isCcy2,
} from '../utils/';

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_RATES_SUCCESS:
      return fetchCurrencyRatesReducer(state, action);
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
}

export const fetchCurrencyRatesReducer = (state, action) => {
  const { ccy1, ccy2 } = state;
  const rate = getRate(ccy1.code, ccy2.code, action.rates);

  return {
    ...state,
    rate,
    rates: action.rates,
  };
};

export const changeCurrencyValueReducer = (state, action) => {
  const { rate } = state;
  const { id: base, value } = action;
  const counter = getCounter(base);
  const parsedValue = parseCurrency(value);
  const convertedValue = applyRate(parsedValue, rate);

  return {
    ...state,
    rate,
    [base]: {
      ...state[base],
      value: Number(parsedValue),
      formatted: formatCurrencyOutput(parsedValue, base),
    },
    [counter]: {
      ...state[counter],
      value: convertedValue,
      formatted: formatCurrencyOutput(convertedValue, counter),
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

export const invertCurrencyReducer = state => {
  const { ccy1, ccy2, rates } = state;
  const rate = getRate(ccy2.code, ccy1.code, rates);

  return {
    ...state,
    rate,
    ccy1: {
      ...ccy1,
      code: ccy2.code,
    },
    ccy2: {
      code: ccy1.code,
      value: applyRate(ccy1.value, rate),
      formatted: formatCurrencyOutput(applyRate(ccy1.value, rate)),
    },
  };
};

export const changeCcy1CodeReducer = (state, action) => {
  const { ccy1, ccy2, rates } = state;
  const rate = getRate(action.code, ccy2.code, rates);

  return {
    ...state,
    rate,
    ccy1: {
      ...ccy1,
      code: action.code,
    },
    ccy2: {
      ...ccy2,
      value: applyRate(ccy1.value, rate),
      formatted: formatCurrencyOutput(applyRate(ccy1.value, rate)),
    }
  };
};

export const changeCcy2CodeReducer = (state, action) => {
  const { ccy1, rates } = state;
  const rate = getRate(ccy1.code, action.code, rates);

  return {
    ...state,
    rate,
    ccy2: {
      code: action.code,
      value: applyRate(ccy1.value, rate),
      formatted: formatCurrencyOutput(applyRate(ccy1.value, rate)),
    }
  };
}

export const swapCurrencyReducer = (state, action) => {
  const { ccy1, ccy2, rates } = state;
  const rate = getRate(ccy2.code, ccy1.code, rates);

  return {
    ...state,
    rate,
    ccy1: ccy2,
    ccy2: ccy1,
  };
};

export const exchangeAmountReducer = (state, action) => {
  const { ccy1, ccy2, pockets } = state;
  const updatedBasePocket = pockets[ccy1.code].value - ccy1.value;
  const updatedCounterPocket = pockets[ccy2.code].value + ccy2.value;

  return {
    ...state,
    ccy1: {
      code: ccy1.code,
      value: '',
      formatted: '',
    },
    ccy2: {
      code: ccy2.code,
      value: '',
      formatted: '',
    },
    pockets: {
      ...pockets,
      [ccy1.code]: {
        value: updatedBasePocket,
        formatted: formatCurrencyOutput(updatedBasePocket),
      },
      [ccy2.code]: {
        value: updatedCounterPocket,
        formatted: formatCurrencyOutput(updatedCounterPocket),
      },
    },
  };
};
