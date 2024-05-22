import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
  initstate:[]
};

const cartslice = createSlice({
    name:'cart',
    initialState,
    reducers:{//to mutate the state
        add(state,action){//pure functions
            // console.log(action.payload);
            state.initstate.push(action.payload)//we can directly change the state in redux-toolkit due to createSlice
        },
        remove(state,action){
           const {initstate} = {...state};
           return {...state,initstate:initstate.filter(item => item.id !== action.payload)}
        },

    },
});

export const {add,remove} = cartslice.actions;

export default cartslice.reducer;
