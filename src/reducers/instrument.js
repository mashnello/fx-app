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
} from '../utils/';

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_RATES_SUCCESS: {
      const { ccy1, ccy2 } = state;
      const rate = getRate(ccy1.code, ccy2.code, action.rates);

      return {
        ...state,
        rate,
        rates: action.rates,
      };
    }
    case CHANGE_CURRENCY_VALUE: {
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
          formatted: formatCurrencyOutput(parsedValue, base)
        },
        [counter]: {
          ...state[counter],
          value: convertedValue,
          formatted: formatCurrencyOutput(convertedValue, counter)
        }
      };
    }
    case CHANGE_CURRENCY_CODE: {
      const { ccy1, ccy2, rates } = state;
      const { id: base, code } = action;
      const counter = getCounter(base);
      const baseCode = state[base].code;
      const counterCode = state[counter].code;
      const counterValue = state[counter].value;
      const isInverted = counterCode === code;
      const rate = getRate(code, counterCode, rates);
      console.log(code, baseCode, counterCode);

      const invertedCodes = isInverted
        ? {
          rate: getRate(ccy2.code, ccy1.code, rates),
          ccy1: {
            code: ccy2.code,
            value: ccy1.value,
            formatted: ccy1.formatted
          },
          ccy2: {
            code: ccy1.code,
            value: applyRate(ccy1.value, rate),
            formatted: formatCurrencyOutput(applyRate(ccy1.value, rate))
          },
        }
        : {};

      return {
        ...state,
        rate,
        [base]: {
          code,
          value: applyRate(counterValue, rate),
          formatted: formatCurrencyOutput(applyRate(counterValue, rate))
        },
        ...invertedCodes,
      };
    }
    case SWAP_CURRENCY: {
      const { ccy1, ccy2, rates } = state;
      const rate = getRate(ccy2.code, ccy1.code, rates);

      return {
        ...state,
        rate,
        ccy1: ccy2,
        ccy2: ccy1,
      };
    }
    case EXCHANGE_AMOUNT: {
      const { ccy1, ccy2, pockets } = state;
      const updatedBasePocket = pockets[ccy1.code].value - ccy1.value;
      const updatedCounterPocket = pockets[ccy2.code].value + ccy2.value;

      return {
        ...state,
        ccy1: {
          code: ccy1.code,
          value: '',
          formatted: ''
        },
        ccy2: {
          code: ccy2.code,
          value: '',
          formatted: ''
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
    }
    default:
      return state
  }
}
