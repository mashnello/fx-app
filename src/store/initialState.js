const initialState = {
  ccy1: {
    value: 100,
    code: 'GBP',
    symbol: '$'
  },
  ccy2: {
    value: 500,
    code: 'USD',
    symbol: '$'
  },
  rate: 1.2532,
  accounts: {
    USD: 2.50,
    EUR: 5,
    GBP: 3.47,
  },
  currencies: {
    USD: {
      symbol: '$',
    },
    EUR: {
      symbol: '€',
    },
    GBP: {
      symbol: '£',
    },
  },
  rates: {
    USD: 1,
    EUR: 1.2,
    GBP: 1.3,
  }
};

export default initialState;
