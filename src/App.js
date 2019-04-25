import React from 'react';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import Timer from './components/TimerComponent';

const store  = createStore(allReducers);

// store.subscribe(()=>console.log(store.getState()))

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Timer/>
      </Provider>
    )
  }
}

export default App

