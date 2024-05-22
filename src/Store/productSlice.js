import { createSlice } from "@reduxjs/toolkit";
const STATUSES_ENUM = Object.freeze({
    IDLE : 'idle',
    ERROR : 'error',
    LOADING : 'loading',
});

const productSlice = createSlice({
    name:'product',
    initialState : {
        data : [],
        status: STATUSES_ENUM.IDLE,

    },
    reducers:{//to mutate the state
        setProducts(state,action){//pure functions
            // console.log(action.payload);
            state.data = action.payload;
            state.initstate.push(action.payload)//we can directly change the state in redux-toolkit due to createSlice
        },
        setStatus(state,action){
            state.status = action.payload;
        }

    },
});

export function fetchProducts() {
    return async function fetchProductsthunk(dispatch,getstate){
        dispatch(setStatus(STATUSES_ENUM.LOADING));
        try{
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data));
            console.log(data)
            dispatch(setStatus(STATUSES_ENUM.IDLE));
        }
        catch(err){
                throw new Error(STATUSES_ENUM.ERROR);
        }
    }
}

export const {setProducts,setStatus} = productSlice.actions;

export default productSlice.reducer;
