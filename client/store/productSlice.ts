import {createSlice} from "@reduxjs/toolkit";
import {
    AOptions, AParameters,
} from "../array-data/ArrayData"

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
    post: [],
},
    reducers: {
        postAdded(state, action) {
            // @ts-ignore
            state.post.push(action.payload)
        }
    }
})


const productSlice = createSlice({
    name: "products",
    initialState: {
        product: AParameters,
        product2: AOptions,
    },
    reducers: {
        addProduct(state, action) {
            // @ts-ignore
            state.product.push(action.payload)
        },
        removeProduct(state) {
            // @ts-ignore
            state.product.pop()
        },
        addProduct2(state, action) {
            // @ts-ignore
            state.product2.push(action.payload)
        },
        }
})

export default postsSlice.reducer
export const { postAdded} = postsSlice.actions





// titles: ATitles,
//     titlesCP: ACardProduct,
//     todos: AProducts,
//     labels: ALabelInput,
//     materials: AMaterial,
//     topProducts: ATopProducts,