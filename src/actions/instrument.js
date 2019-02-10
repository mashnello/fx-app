import { API_URL, API_ID } from '../constants';

export const CHANGE_FOCUS = 'CHANGE_FOCUS';
export const CHANGE_CURRENCY_VALUE = 'CHANGE_CURRENCY_VALUE';
export const CHANGE_CURRENCY_CODE = 'CHANGE_CURRENCY_CODE';
export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const EXCHANGE_AMOUNT = 'EXCHANGE_AMOUNT';
export const FETCH_CURRENCY_RATES = 'FETCH_CURRENCY_RATES';
export const FETCH_CURRENCY_RATES_SUCCESS = 'FETCH_CURRENCY_RATES_SUCCESS';
export const FETCH_CURRENCY_RATES_ERROR = 'FETCH_CURRENCY_RATES_ERROR';

export const changeFocus = id => ({
  type: CHANGE_FOCUS,
  id
});

export const changeCurrencyValue = (id, value) => ({
  type: CHANGE_CURRENCY_VALUE,
  id, value
});

export const changeCurrencyCode = (id, code) => ({
  type: CHANGE_CURRENCY_CODE,
  id, code
});

export const swapCurrency = () => ({
  type: SWAP_CURRENCY
});

export const exchangeAmount = () => ({
  type: EXCHANGE_AMOUNT
});

export const fetchCurrencyRatesSuccess = ({ rates }) => ({
  type: FETCH_CURRENCY_RATES_SUCCESS,
  rates
});

export const fetchCurrencyRatesError = () => ({
  type: FETCH_CURRENCY_RATES_ERROR
});

export const fetchCurrencyRates = () => (dispatch, getState) => {
  const currencies = Object.keys(getState().instrument.currencies);
  const ccyQuery = `&symbols=${currencies.join(',')}`
  return window.fetch(API_URL + API_ID + ccyQuery)
    .then(response => response.json())
    .then(data => dispatch(fetchCurrencyRatesSuccess(data)))
    .catch(() => dispatch(fetchCurrencyRatesError()));
}
