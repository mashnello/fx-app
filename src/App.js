import React, { Component } from 'react';
import {  ReactComponent as CloseIcon } from './icons/close.svg';
import {  ReactComponent as GraphIcon } from './icons/graph.svg';
import {  ReactComponent as SwitchIcon } from './icons/switch.svg';
import {  ReactComponent as ArrowIcon } from './icons/arrow.svg';
import {  ReactComponent as ArrowDownIcon } from './icons/arrow-down.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <CloseIcon width={15} height={15} />
          <h1 className="title">Exchange</h1>
          <GraphIcon width={20} height={20} />
        </header>
        <main>
          <div className="ccy ccy1">
            <div className="ccy-wrapper">
              <select className="ccy-list">
                <option value="USD" selected>USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
              <ArrowDownIcon width={20} height={20} />
              <input
                className="ccy-value"
                type="number"
                placeholder="0"
              />
            </div>
            <div className="balance">Balance: $0.00</div>
          </div>
          <div className="ccy-switch-wrapper">
            <div className="ccy-switch">
              <SwitchIcon width={15} height={15} />
            </div>
            <div className="ccy-rate">
              <ArrowIcon width={15} height={15} />
              <span className="ccy-rate-value">
                $1 = zl4.2860
              </span>
            </div>
          </div>
          <div className="ccy ccy2">
            <div className="ccy-wrapper">
              <select className="ccy-list">
                <option value="USD" selected>USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
              <ArrowDownIcon width={20} height={20} />
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
        <footer>
          <div className="credits">
            <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/egor-rumyantsev" title="Egor Rumyantsev">Egor Rumyantsev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
