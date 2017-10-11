import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';

const verbToBe = [
  {
    title: 'infinitive',
    verbList: ['TO BE']
  },
  {
    title: 'simple present',
    verbList: ['AM', 'IS', 'ARE']
  },
  {
    title: '-ing form',
    verbList: ['BEING']
  },
  {
    title: 'base form',
    verbList: ['BE']
  },
  {
    title: 'past form',
    verbList: ['WAS', 'WERE']
  },
  {
    title: 'past participle',
    verbList: ['BEEN']
  },
];

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
