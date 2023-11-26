import { createStore } from 'redux';
import { crudReducer } from './reducer/reducer';
const store = createStore(crudReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;