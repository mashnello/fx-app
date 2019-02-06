const initialState = {
  ccy1: {
    code: 'USD',
    value: '',
    formatted: '',
  },
  ccy2: {
    code: 'EUR',
    value: '',
    formatted: '',
  },
  rate: 1/3,
  pockets: {
    USD: {
      value: 10,
      formatted: '10.00'
    },
    EUR: {
      value: 10,
      formatted: '10.00'
    },
    GBP: {
      value: 10,
      formatted: '10.00'
    },
    PLN: {
      value: 10,
      formatted: '10.00'
    }
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
    PLN: {
      symbol: 'zł',
    },
  },
  rates: {
    EUR: 3,
    GBP: 5,
    USD: 1,
  }
};

export default initialState;
