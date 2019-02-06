const initialState = {
  ccy1: {
    code: 'USD',
    value: '',
    formatted: '',
    focused: true,
  },
  ccy2: {
    code: 'EUR',
    value: '',
    formatted: '',
    focused: false,
  },
  rate: 0,
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
  rates: {}
};

export default initialState;
