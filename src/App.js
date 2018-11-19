import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div 
        className="App"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
      <Header />
      <Table />
      </div>
    );
  }
}

export default App;

