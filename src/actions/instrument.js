export const CHANGE_CURRENCY_VALUE = 'CHANGE_CURRENCY_VALUE';
export const CHANGE_CURRENCY_CODE = 'CHANGE_CURRENCY_CODE';
export const INVERT_CURRENCY_PAIR = 'INVERT_CURRENCY_PAIR';
export const EXCHANGE_AMOUNT = 'EXCHANGE_AMOUNT';

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
