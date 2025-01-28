import React from 'react';
import {Provider} from 'react-redux';
import { store } from './src/Redux/store';
import CounterScreen from './src/screens/CounterScreen';
import Home from './src/screens/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Home/>
      {/* <QRCodeScannerScreen/> */}
      <CounterScreen/>
    </Provider>
  );
};

export default App;
