import { CCY1, CCY2, MAX_INPUT_LENGHT } from '../constants';

export const addPrefix = (value, isBase) => {
  const isTruthy = value && Number(value) !== 0;
  const prefix = isBase ? '-' : '+';

  return isTruthy ? `${prefix} ${value}` : value;
};

export const applyRate = (amount, rate) => {
  if (!amount || !Number(amount)) return amount;
  return parseFloat(amount) * rate;
};

export const formatInteger = value => {
  const isEmptyInput = value === '';
  const formattedInteger = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 3
  }).format(value);

  return isEmptyInput ? value : formattedInteger;
};

export const formatDecimal = (value, precision) => {
  const [integer, fraction] = String(value).split('.');
  const formattedDecimal = [
    formatInteger(integer || 0),
    fraction.replace(/\./, '').slice(0, precision)
  ].join('.');

  return formattedDecimal;
};

export const formatCurrencyOutput = (value, precision = 2) => {
  const formattedString = /\./.test(value)
    ? formatDecimal(value, precision)
    : formatInteger(value);

  return formattedString.length < MAX_INPUT_LENGHT
    ? formattedString
    : '';
};

export const getBaseRate = (ccy1, ccy2, rates) => {
  return rates[ccy2] / rates[ccy1];
};

export const getCounter = base => {
  if (base === CCY1) {
    return CCY2;
  }
  return CCY1;
};

export const getFormatted = ({ focused, formatted }, { value }, rate) => {
  if (focused) {
    return formatted;
  }
  return formatCurrencyOutput(applyRate(value, rate));
};

export const getFee = (value, fee, rate) => {
  return value > fee.limit
    ? (value - fee.limit) * fee.multiplier * rate
    : 0;
};

export const getRate = (isCcy1Focused, baseRate) => {
  if (isCcy1Focused) {
    return baseRate;
  }
  return 1 / baseRate
};

export const getValue = ({ focused, value }, counter, rate) => {
  if (focused) {
    return value;
  }
  return applyRate(counter.value, rate);
};

export const isCcy1 = ccy => ccy === CCY1;

export const isCcy2 = ccy => ccy === CCY2;

export const parseCurrency = value => {
  const dotsInValue = value.match(/\./g) && value.match(/\./g).length;
  const withSingleDot = dotsInValue > 1 ? value.replace(/\.$/, '') : value;
  const parsedCurrency = withSingleDot.replace(/[^0-9.]/g, '');

  return parsedCurrency;
};

export const simulateTick = rates => Object.keys(rates).forEach(
  code => {
    const correlation = Math.random() * (1.0001 - 0.9999) + 0.9999;
    // eslint-disable-next-line
    return rates[code] *= correlation;
  }
);
