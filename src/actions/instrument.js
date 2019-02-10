import { API_URL, API_ID } from '../constants/common';
import * as types from '../constants/actionTypes';

export const changeFocus = id => ({
  type: types.CHANGE_FOCUS,
  id
});

export const changeCurrencyValue = (id, value) => ({
  type: types.CHANGE_CURRENCY_VALUE,
  id, value
});

export const changeCurrencyCode = (id, code) => ({
  type: types.CHANGE_CURRENCY_CODE,
  id, code
});

export const swapCurrency = () => ({
  type: types.SWAP_CURRENCY
});

export const exchangeAmount = () => ({
  type: types.EXCHANGE_AMOUNT
});

export const fetchCurrencyRatesSuccess = ({ rates }) => ({
  type: types.FETCH_CURRENCY_RATES_SUCCESS,
  rates
});

export const fetchCurrencyRatesError = () => ({
  type: types.FETCH_CURRENCY_RATES_ERROR
});

export const fetchCurrencyRates = () => (dispatch, getState) => {
  const currencies = Object.keys(getState().instrument.currencies);
  const ccyQuery = `&symbols=${currencies.join(',')}`
  return window.fetch(API_URL + API_ID + ccyQuery)
    .then(response => response.json())
    .then(data => dispatch(fetchCurrencyRatesSuccess(data)))
    .catch(() => dispatch(fetchCurrencyRatesError()));
};
