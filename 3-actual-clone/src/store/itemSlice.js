import {createSlice } from "@reduxjs/toolkit"
import {DEFAULT_VALUE} from "../data/items"

const itemSlice = createSlice({
    name:"item",
    initialState:DEFAULT_VALUE,
    reducers:{
        addInitialItems:(state,action)=>{
            return action.payload
        }
    }
})
export const itemActions = itemSlice.actions 
export default itemSlice
