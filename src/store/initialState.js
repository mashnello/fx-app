const initialState = {
  ccy1: {
    value: '',
    code: 'GBP',
  },
  ccy2: {
    value: '',
    code: 'USD',
  },
  rate: 1.2532,
  pockets: {
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
    EUR: 0.87108,
    GBP: 0.76234,
    USD: 1,
  }
};

export default initialState;
