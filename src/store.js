import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./actions/Slice"; 

const store = configureStore({
    reducer: {
        student: studentReducer,
       
    },
});
export default store;