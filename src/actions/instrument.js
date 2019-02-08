export const CHANGE_FOCUS = 'CHANGE_FOCUS';
export const CHANGE_CURRENCY_VALUE = 'CHANGE_CURRENCY_VALUE';
export const CHANGE_CURRENCY_CODE = 'CHANGE_CURRENCY_CODE';
export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const EXCHANGE_AMOUNT = 'EXCHANGE_AMOUNT';
export const FETCH_CURRENCY_RATES = 'FETCH_CURRENCY_RATES';
export const FETCH_CURRENCY_RATES_SUCCESS = 'FETCH_CURRENCY_RATES_SUCCESS';
export const FETCH_CURRENCY_RATES_ERROR = 'FETCH_CURRENCY_RATES_ERROR';

const API_URL = 'API_URL';

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

export const fetchCurrencyRates = () => dispatch => {
  return window.fetch(API_URL)
    .then(response => response.json())
    .then(data => dispatch(fetchCurrencyRatesSuccess(data)))
    .catch(() => dispatch(fetchCurrencyRatesSuccess({
      "disclaimer": "Usage subject to terms: https://openexchangerates.org/terms",
      "license": "https://openexchangerates.org/license",
      "timestamp": 1549486800,
      "base": "USD",
      "rates": {
        "EUR": 0.879643,
        "GBP": 0.773022,
        "PLN": 3.78045,
        "USD": 1
      }
    })));
}
