export const CHANGE_CURRENCY_VALUE = 'CHANGE_CURRENCY_VALUE';
export const CHANGE_CURRENCY_CODE = 'CHANGE_CURRENCY_CODE';
export const INVERT_CURRENCY_PAIR = 'INVERT_CURRENCY_PAIR';
export const EXCHANGE_AMOUNT = 'EXCHANGE_AMOUNT';
export const FETCH_CURRENCY_RATES = 'FETCH_CURRENCY_RATES';
export const FETCH_CURRENCY_RATES_SUCCESS = 'FETCH_CURRENCY_RATES_SUCCESS';
export const FETCH_CURRENCY_RATES_ERROR = 'FETCH_CURRENCY_RATES_ERROR';

const API_URL = 'API_URL';

export const changeCurrencyValue = (id, value) => ({
  type: CHANGE_CURRENCY_VALUE,
  id, value
});

export const changeCurrencyCode = (id, code) => ({
  type: CHANGE_CURRENCY_CODE,
  id, code
});

export const invertCurrencyPair = () => ({
  type: INVERT_CURRENCY_PAIR
});

export const exchangeAmount = () => ({
  type: EXCHANGE_AMOUNT
});

export const fetchCurrencyRates = () => ({
  type: FETCH_CURRENCY_RATES
});

export const fetchCurrencyRatesSuccess = ({ rates }) => ({
  type: FETCH_CURRENCY_RATES_SUCCESS,
  rates
});

export const fetchCurrencyRatesError = error => ({
  type: FETCH_CURRENCY_RATES_ERROR
});

export const fetchCurrencyRatesCall = () => dispatch => {
    dispatch(fetchCurrencyRates());
    return fetch(API_URL)
    .then(response => response.json())
    .then(data => dispatch(fetchCurrencyRatesSuccess(data)))
    .catch(error => dispatch(fetchCurrencyRatesError(error)));
  }
