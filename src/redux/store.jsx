import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    products: { items: [] }
};

const store = configureStore({
    reducer: (state = initialState) => state
});

export default store;
