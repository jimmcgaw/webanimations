import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Throbber from './components/Throbber';

class App extends Component {
  render(){
    return (
      <div>
        <h1>Web Animations API</h1>
        <Throbber />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));