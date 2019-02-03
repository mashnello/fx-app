import {
  CHANGE_CURRENCY_VALUE,
  CHANGE_CURRENCY_CODE,
} from '../actions/instrument';
import initialState from '../store/initialState';
import {
  getCounter,
  applyRate,
  formatAmount,
} from '../utils/';

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_VALUE: {
      const { id: base, value } = action;
      const counter = getCounter(base);
      const { rate: prevRate, rates } = state;
      const rate = (rates[counter] / rates[base]) || prevRate;

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
      const { id: base, code } = action;
      const counter = getCounter(base);
      const { rate: prevRate, rates } = state;
      const rate = (rates[counter] / rates[base]) || prevRate;
      const updatedCounter = state[counter].code === code
        ? {
          [counter]: {
            ...state[counter],
            code: state[base].code
          }
        }
        : {};
      return {
        ...state,
        rate,
        [base]: {
          ...state[base],
          code
        },
        ...updatedCounter
      }
    }
    default:
      return state
  }
}
