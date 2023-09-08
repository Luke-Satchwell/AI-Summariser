import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
    // Reduce state to only grab what is needed
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    // allows us to do something with state
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})