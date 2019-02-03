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
    USD: 10,
    EUR: 10,
    GBP: 10,
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
