import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { brandsDatas } from "./arrayOfDatas"

const initialState = {
    data: brandsDatas,
  }

  export const brandsSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {},
  })
  

export const store = configureStore({
  reducer: {
    brandsData: brandsSlice.reducer
  },
})