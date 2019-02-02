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
        <header>
          <div className="icons">
            <CloseIcon width={20} height={20} />
            <GraphIcon width={20} height={20} />
            <SwitchIcon width={20} height={20} />
            <ArrowIcon width={20} height={20} />
            <ArrowDownIcon width={20} height={20} />
          </div>
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
        <footer>
          <div className="credits">
            <div>Icons made by <a href="https://www.flaticon.com/authors/egor-rumyantsev" title="Egor Rumyantsev">Egor Rumyantsev</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
