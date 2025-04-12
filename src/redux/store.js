import { configureStore } from '@reduxjs/toolkit';
import firebaseReducer from '../features/firebase/firebaseSlice';

export const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
  },
});
