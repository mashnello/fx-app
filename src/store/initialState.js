const initialState = {
  ccy1: {
    code: 'USD',
    value: '',
    formatted: '',
    focused: true,
    fee: 0,
  },
  ccy2: {
    code: 'EUR',
    value: '',
    formatted: '',
    focused: false,
    fee: 0,
  },
  rate: 0,
  baseRate: 0,
  fee: {
    limit: 5000,
    multiplier: 0.01,
  },
  pockets: {
    USD: 10,
    EUR: 10,
    GBP: 10,
    PLN: 10,
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
