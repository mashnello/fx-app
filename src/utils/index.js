export const getCounter = base => base === 'ccy1' ? 'ccy2' : 'ccy1';

export const isCcy1 = ccy => ccy === 'ccy1';

export const isCcy2 = ccy => ccy === 'ccy2';

export const applyRate = (amount, rate) => {
  if (!amount || isNaN(Number(amount))) return amount;
  return parseFloat(amount) * rate;
};

export const formatInteger = value => {
  const isEmptyInput = value === '';
  const formattedInteger = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 3
  }).format(value);

  return isEmptyInput ? value : formattedInteger;
};

export const formatDecimal = value => {
  const [integer, fraction] = String(value).split('.');
  const formattedDecimal = [
    formatInteger(integer),
    fraction.replace(/\./, '').slice(0, 2)
  ].join('.');

  return formattedDecimal;
};

export const addPrefix = (value, isBase) => {
  const isTruthy = value && Number(value) !== 0;
  const prefix = isBase ? '-' : '+';

  return isTruthy ? `${prefix} ${value}` : value;
};

export const formatCurrencyOutput = value => {
  const formattedString = /\./.test(value)
    ? formatDecimal(value)
    : formatInteger(value);

  return formattedString;
};

window.formatCurrencyOutput = formatCurrencyOutput;
export const parseCurrency = value => {
  const dotsInValue = value.match(/\./g) && value.match(/\./g).length;
  const withSingleDot = dotsInValue > 1 ? value.replace(/\.$/, '') : value;
  const parsedCurrency = withSingleDot.replace(/[^0-9.]/g, '');

  return parsedCurrency;
};

export const getRate = (ccy1, ccy2, rates) => {
  return rates[ccy1] / rates[ccy2];
};

export const formatRate = rate => rate.toFixed(4);
