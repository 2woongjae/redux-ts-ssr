import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppContainer from './App';
import './index.css';
import './App.css';

// yarn add redux @types/redux
import {createStore} from 'redux';
// yarn add react-redux @types/react-redux
import {Provider} from 'react-redux';

import {ageApp} from './reducer';

const initialState = (window as any).__INITIAL_STATE__;

// 스토어 만들기
const store = createStore<{ age: number; }>(ageApp, initialState);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);