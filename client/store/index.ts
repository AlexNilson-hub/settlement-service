import {combineReducers, configureStore} from "@reduxjs/toolkit"
import postsSlice from "./productSlice";


const rootReducer = combineReducers ({
    posts: postsSlice,

})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch