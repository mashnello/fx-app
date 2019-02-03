import {
  CHANGE_CURRENCY_VALUE,
  CHANGE_CURRENCY_CODE,
  UPDATE_CURRENCY_RATE,
} from '../actions/instrument';
import initialState from '../store/initialState';
import {
  getCounter,
  applyRate,
  formatAmount,
} from '../utils/'

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_VALUE: {
      const { id: base, value } = action;
      const { rate } = state;
      const counter = getCounter(base);
      console.log(value);
      return {
        ...state,
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
      const { id, code } = action;
      const ccy = state[id];
      return {
        ...state,
        [id]: {
          ...ccy,
          code
        }
      }
    }
    default:
      return state
  }
}
