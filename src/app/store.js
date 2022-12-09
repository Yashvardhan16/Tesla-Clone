import { configureStore } from '@reduxjs/toolkit';
import carReducer from '/Users/yashvardhan/tesla/src/features/Car/CarSlice.js';

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
