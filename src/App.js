import React from 'react';
import logo from './logo.svg';
import './App.css';

import VisibleTaskList from './containers/VisibleTaskList'
import {AddTask} from "./containers/AddTask";
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <VisibleTaskList />
      <AddTask />
      <Footer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
