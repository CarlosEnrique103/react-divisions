import { configureStore } from '@reduxjs/toolkit';
import divisionReducer from '../features/division/divisionSlice';

export const store = configureStore({
  reducer: {
    division: divisionReducer,
  },
});
