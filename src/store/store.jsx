// import { Store } from "@reduxjs/toolkit";

import { configureStore } from "@reduxjs/toolkit"; 
    import libraryReducer from "./libraryreducer";

const store = configureStore({
reducer:libraryReducer
})
export default store

