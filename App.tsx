import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';
import Calendar from './src/screens/Calendar';

const App = () => {
  return (
    <Provider store={store}>
      <Calendar />
    </Provider>
  );
};

export default App;
