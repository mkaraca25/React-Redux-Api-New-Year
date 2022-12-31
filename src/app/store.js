import { configureStore } from '@reduxjs/toolkit';
import countentSlice from '../features/counter/contentSlice';

export const store = configureStore({
  reducer: {
    content: countentSlice,
  },
});
