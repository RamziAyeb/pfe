import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice/userSlice';
import reservationSlice from './reservationSlice/reservationSlice';
export const store = configureStore({
    reducer: {
        user: userSlice,
        reservation:reservationSlice,
    },
  });