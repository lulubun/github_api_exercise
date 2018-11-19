import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import { connect } from "react-redux";
import Result from './Result';
import Button from './Button';
import * as actions from '../redux/actions'

class App extends Component {
  render() {
    if (!this.props.token) {
      this.props.loginReq()
    }
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


const mapStateToProps = (state) => ({
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  loginReq: () => dispatch(actions.loginReq()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

