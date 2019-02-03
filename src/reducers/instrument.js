import {
  CHANGE_CURRENCY_VALUE,
  CHANGE_CURRENCY_CODE,
  INVERT_CURRENCY_PAIR,
  EXCHANGE_AMOUNT,
} from '../actions/instrument';
import initialState from '../store/initialState';
import {
  getCounter,
  applyRate,
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
          value,
        },
        [counter]: {
          ...state[counter],
          value: applyRate(value, rate),
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
      const rate = getRate(baseCode, counterCode, rates);

      const invertedCodes = isInverted
        ? {
          ccy1: {
            code: ccy2.code,
            value: ccy1.value,
          },
          ccy2: {
            code: ccy1.code,
            value: applyRate(ccy1.value, rate),
          },
        }
        : {};

      return {
        ...state,
        rate,
        [base]: {
          code,
          value: applyRate(counterValue, rate),
        },
        ...invertedCodes,
      };
    }
    case INVERT_CURRENCY_PAIR: {
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

      return {
        ...state,
        ccy1: {
          ...ccy1,
          value: '',
        },
        ccy2: {
          ...ccy2,
          value: '',
        },
        pockets: {
          ...pockets,
          [ccy1.code]: pockets[ccy1.code] - ccy1.value,
          [ccy2.code]: pockets[ccy2.code] + ccy2.value,
        },
      };
    }
    default:
      return state
  }
}
