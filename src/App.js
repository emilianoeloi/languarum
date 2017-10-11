import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div class="App">
        <div class="columns">
          <Form
            title={'infinitive'}
            verbList={['TO BE']}
            cssClass={'column'}
          />
          <Form
            title={'simple present'}
            verbList={['AM', 'IS', 'ARE']}
            cssClass={'column'}
          />
          <Form
            title={'-ing form'}
            verbList={['BEING']}
            cssClass={'column'}
          />
        </div>
        <div class="App columns">
          <Form
            title={'base form'}
            verbList={['BE']}
            cssClass={'column'}
          />
          <Form
            title={'past form'}
            verbList={['WAS', 'WERE']}
            cssClass={'column'}
          />
          <Form
            title={'past participle'}
            verbList={['BEEN']}
            cssClass={'column'}
          />
        </div>
      </div>
    );
  }
}

export default App;
