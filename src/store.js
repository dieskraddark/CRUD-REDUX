// import { createStore } from 'redux';
// import { crudReducer } from './reducer/reducer';
// const store = createStore(crudReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import { crudSlice } from "./actions/Slice";
export const store = configureStore({
    reducer: crudSlice.reducer,
})

export default store;