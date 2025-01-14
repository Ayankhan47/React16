import { createSlice } from "@reduxjs/toolkit";
import {nanoid} from "nanoid";

const initialState = {
    data: [
        {
            id: nanoid(),
            name: "Biscuit",
            price: 100,
            category:"Snack"
        },
        {
            id: nanoid(),
            name: "Rice",
            price: 200,
            category:"Food"
        },
        {
            id: nanoid(),
            name: "Mirror",
            price: 300,
            category:"Utility"
        },
    ],
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        add: (state, action) => {
            state.data.push(action.payload);
        },
        remove:(state, action)=> {
            state.data.splice(action.payload,1)
        }
    },
});

export default productSlice.reducer;
export const { add ,remove } = productSlice.actions;