import { configureStore} from "@reduxjs/toolkit"
import itemSlice from "./itemSlice"
import fetchingStateSlice from "./fetchingSlice"
import bagSlice from "./bagSlice"

 const myntraStore = configureStore({
    reducer:{
        item: itemSlice.reducer, 
        fetching: fetchingStateSlice.reducer,
        bag: bagSlice.reducer

    }
})

 export default myntraStore