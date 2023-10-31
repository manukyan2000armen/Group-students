import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import groupSlice from '../features/groups/groupSlice';
import studentSlice from '../features/students/studentSlice';

export const store = configureStore({
  reducer: {
    group:groupSlice,
    student:studentSlice 
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
