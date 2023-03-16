import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import draftSlice from './reducer/draftSlice';
import userSlice from './reducer/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    draft: draftSlice
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
