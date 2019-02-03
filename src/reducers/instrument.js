import {
  CHANGE_CURRENCY_VALUE,
  CHANGE_CURRENCY_CODE,
  INVERT_CURRENCY_PAIR,
} from '../actions/instrument';
import initialState from '../store/initialState';
import {
  getCounter,
  applyRate,
  formatAmount,
  getRate,
} from '../utils/';

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_VALUE: {
      const { rate } = state;
      const { id: base, value } = action;
      const counter = getCounter(base);

      return {
        ...state,
        rate,
        [base]: {
          ...state[base],
          value: formatAmount(value)
        },
        [counter]: {
          ...state[counter],
          value: formatAmount(applyRate(value, rate))
        }
      }
    }
    case CHANGE_CURRENCY_CODE: {
      const { ccy1, ccy2, rates } = state;
      const { id: base, code } = action;
      const counter = getCounter(base);
      const baseCode = state[base].code;
      const counterCode = state[counter].code;
      const counterValue = state[counter].value;
      const isInverted = counterCode === code;
      const rate = getRate(baseCode, counterCode, rates);

      const invertedCodes = isInverted
        ? {
          ccy1: {
            value: ccy1.value,
            code: ccy2.code
          },
          ccy2: {
            value: applyRate(ccy1.value, rate),
            code: ccy1.code
          }
        }
        : {};

      return {
        ...state,
        rate,
        [base]: {
          value: applyRate(counterValue, rate),
          code
        },
        ...invertedCodes
      }
    }
    case INVERT_CURRENCY_PAIR: {
      const { ccy1, ccy2, rates } = state;
      const rate = getRate(ccy1.code, ccy2.code, rates);

      return {
        ...state,
        rate,
        ccy1: ccy2,
        ccy2: ccy1,
      }
    }
    default:
      return state
  }
}
