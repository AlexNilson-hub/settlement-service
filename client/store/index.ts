import {combineReducers, configureStore} from "@reduxjs/toolkit"
import postsSlice from "./productSlice";
import productsSlice from "./storeSlice/productsSlice"


const rootReducer = combineReducers ({
    posts: postsSlice,
    products: productsSlice,

})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch