import {createStore} from 'redux';
import rootReducer from './Reducers/rootReducer';

const store = createStore(rootReducer);
export {store};
