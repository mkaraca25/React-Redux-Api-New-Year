import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
const initialState = {
  contents:[],
  isLoading: false,
  error: null,

}
export const fetchContent=createAsyncThunk('content/fetchContent',async()=>{
  const res=await axios("https://jsonplaceholder.typicode.com/photos")
  const data=await res.data
  return data

})
export const contentSlice=createSlice({
  name:'content',
  initialState,
  reducers:{},
  extraReducers:(builder ) =>{
    builder.addCase(fetchContent.pending,(state)=>{
      state.isLoading=true;
    })
    builder.addCase(fetchContent.fulfilled,(state,action)=>{
      state.contents=action.payload;
      state.isLoading=false;
    })
    builder.addCase(fetchContent.rejected,(state,action)=>{
      state.error=action.error.message;
      state.isLoading=false;
    })
  },
})

export default contentSlice.reducer
