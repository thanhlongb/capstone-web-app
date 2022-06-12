import { configureStore } from "@reduxjs/toolkit";
// import searchReducer from '../features/DataTable/dataTableSlice'
import { pokemonApi } from "../services/pokemon";
import { sampleApi } from "../services/sampleApi";
import dataTableReducer from '../features/DataTable/dataTableSlice'

export const store = configureStore({
  reducer: {
    dataTable: dataTableReducer,
    [sampleApi.reducerPath]: sampleApi.reducer,
    // [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sampleApi.middleware)
  
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch