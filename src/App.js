import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import verbToBe from './verbToBe';

class App extends Component {
  render() {
    return (
      <div class="App">
        <div class="columns">
          {verbToBe.map((verb) => {
            return (
              <Form
              title={verb.title}
              verbList={verb.verbList}
              cssClass={'column'}
            />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
