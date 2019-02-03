const initialState = {
  ccy1: {
    value: 0,
    code: 'USD',
    symbol: '$'
  },
  ccy2: {
    value: 0,
    code: 'USD',
    symbol: '$'
  },
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
