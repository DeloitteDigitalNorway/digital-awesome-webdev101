import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import App from './App';

class Root extends PureComponent {
  render() {
    return <App/>;
  }
}

export default hot(module)(Root);
