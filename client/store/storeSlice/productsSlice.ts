import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    return fetch('http://rvi.17bit.online:31700/api/types?&json_indent=4&bytarget=unf_product_t&title=1')
        .then((res) => res.json())
        .then(json => JSON.stringify(json))
})

// @ts-ignore
const productsSlice = createSlice({
    name: "products",
    initialState: {
        product: [],
        loading: false,
    },
    extraReducers: {
        // @ts-ignore
        [getProducts.pending]: (state, action) => {
            state.loading = true;
        },
        // @ts-ignore
        [getProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        // @ts-ignore
        [getProducts.rejected]: (state, action) => {
            state.loading = false;
        },
    }
})
// @ts-ignore
export default productsSlice.reducer;