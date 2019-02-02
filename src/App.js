import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1 className="header">Exchange</h1>
        </header>
        <main>
          <div className="ccy ccy1">
            <div className="ccy-wrapper">
              <select className="ccy-list">
                <option value="USD" selected>USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
              <input
                className="ccy-value"
                type="number"
                placeholder="0"
              />
            </div>
            <div className="balance">Balance: $0.00</div>
          </div>
          <div className="ccy-switch-wrapper">
            <div className="ccy-switch"></div>
            <div className="ccy-rate">$1 = zl4.2860</div>
          </div>
          <div className="ccy ccy2">
            <div className="ccy-wrapper">
              <select className="ccy-list">
                <option value="USD" selected>USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
              <input
                className="ccy-value"
                type="number"
                placeholder="0"
              />
            </div>
            <div className="balance">Balance: $0.00</div>
          </div>
          <div className="exchange-btn-wrapper">
            <button className="exchange-btn">Exchange</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
