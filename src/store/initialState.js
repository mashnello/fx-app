const initialState = {
  ccy1: {
    code: 'USD',
    value: '',
  },
  ccy2: {
    code: 'EUR',
    value: '',
  },
  rate: 1/3,
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
    EUR: 3,
    GBP: 5,
    USD: 1,
  }
};

export default initialState;
