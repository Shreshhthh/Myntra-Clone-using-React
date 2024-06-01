import {createSlice } from "@reduxjs/toolkit"

const fetchingStateSlice = createSlice({
    name:"fetching",
    initialState:{
        fetchingDone:false,
        currentFetching:false,
    },
    reducers:{
        markFetchingDone:(state)=>{
            const newState = state
            newState.fetchingDone = true
            return (newState);
        },
        markFetchingStarted:(state)=>{
            const newState = state
            newState.currentFetching = true
            return (newState);
        },
        markFetchingFinished:(state)=>{
            const newState = state
            newState.currentFetching = false
            return (newState);
        },
    }
})
export const fetchingActions = fetchingStateSlice.actions 
export default fetchingStateSlice