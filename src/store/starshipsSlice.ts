/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';
import { Starship } from '../types';
import { STARSHIPS_URL } from '../constants/url';

type starshipsState = {
  starships: Starship[];
  loading: boolean;
  error: string | null;
}

const initialState: starshipsState = {
  starships: [],
  loading: false,
  error: null,
};

export const starships = createSlice({
  name: 'starships',
  initialState,
  reducers: {
    getStarshipsStart(state) {
      state.loading = true;
    },
    getStarshipsSuccess(state, action: PayloadAction<Starship[]>) {
      state.starships = action.payload;
      state.loading = false;
      state.error = null;
    },
    getStarshipsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getStarshipsStart,
  getStarshipsSuccess,
  getStarshipsFailure,
} = starships.actions;

export const fetchStarships = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getStarshipsStart());
    const allStarships = [];
    let getStarshipsUrl = STARSHIPS_URL;
    while (getStarshipsUrl) {
      const response = await fetch(getStarshipsUrl);
      const { next, results } = await response.json();
      allStarships.push(...results);
      getStarshipsUrl = next;
    }
    dispatch(getStarshipsSuccess(allStarships));
  } catch (err) {
    dispatch(getStarshipsFailure(err));
  }
};

export const selectStarships = (state: RootState) => state.starships;
export default starships.reducer;
