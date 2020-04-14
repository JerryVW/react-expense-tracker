import React, { Component } from 'react';
import ExpenseInput from './components/ExpenseInput/ExpenseInput';
import ExpenseOutput from './components/ExpenseOutput/ExpenseOutput'
import Background from './assets/finance-background.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../node_modules/jquery';
import '../node_modules/popper.js';
import './App.css';
import './assets/Style.css'

class App extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center" src={Background}>
        <div className="row">
            <ExpenseInput />
            <ExpenseOutput />
        </div>
      </div>
    );
  }
}

export default App;
