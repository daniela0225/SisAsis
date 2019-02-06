import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Layout from './Layout';
import configureStore from './src/store/configureStore';

const store = configureStore();

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    )
  }
}