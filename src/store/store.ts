import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import peopleSlice from './peopleSlice';
import starshipsSlice from './starshipsSlice';
import scoreSlice from './scoreSlice';

export const store = configureStore({
  reducer: {
    people: peopleSlice,
    starships: starshipsSlice,
    score: scoreSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
