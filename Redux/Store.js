import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "./Reducer";

const Store = configureStore({
    reducer:{news:newsReducer},
})
export default Store;