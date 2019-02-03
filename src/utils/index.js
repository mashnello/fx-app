export const getCounter = base => base === 'ccy1' ? 'ccy2' : 'ccy1';

export const applyRate = (amount, rate) => {
  if (!amount || isNaN(Number(amount))) return amount;
  return parseFloat(amount) * rate;
};

export const formatAmount = amount => amount;
//   console.log('formatAmount', amount);
//   if (!amount) return amount;
//   const parsedAmount = String(amount)
//     .replace(/[^0-9|.]/, '');

//   return parsedAmount;
// };

export const getRate = (ccy1, ccy2, rates) => {
  return rates[ccy1] / rates[ccy2];
};

export const formatRate = rate => rate.toFixed(4);
