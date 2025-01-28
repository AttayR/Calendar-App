import {combineReducers} from 'redux';
import counterReducer from './CounterReducer/counterReducer';
import userReducer from './user/userReducer';
import authReducer from './AuthReducer/authReducer';
// import { qrCodeReducer } from './QrCodeReducer/qrcodeReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  auth: authReducer,
  // qrCode: qrCodeReducer,
});
export default rootReducer;
