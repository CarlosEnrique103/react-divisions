import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import divisionReducer from '../features/division/divisionSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    division: divisionReducer,
  },
});
