import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import allState from './redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(
  allState,
  applyMiddleware(thunk),
  )


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Table />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
