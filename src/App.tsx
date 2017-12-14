import * as React from 'react';
import './App.css';
import Accounts from './view/Accounts';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Trading Sandbox</h2>
        </div>
        <div className="container-fluid">
          <Accounts/>
        </div>
      </div>
    );
  }
}

export default App;
