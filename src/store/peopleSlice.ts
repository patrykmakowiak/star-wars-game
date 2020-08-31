/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';
import { Person } from '../types';
import { PEOPLE_URL } from '../constants/url';
import { api } from '../api';

type peopleState = {
  people: Person[];
  loading: boolean;
  error: string | null;
}

const initialState: peopleState = {
  people: [],
  loading: false,
  error: null,
};

export const people = createSlice({
  name: 'people',
  initialState,
  reducers: {
    getPeopleStart(state) {
      state.loading = true;
    },
    getPeopleSuccess(state, action: PayloadAction<Person[]>) {
      state.people = action.payload;
      state.loading = false;
      state.error = null;
    },
    getPeopleFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getPeopleStart,
  getPeopleSuccess,
  getPeopleFailure,
} = people.actions;

export const fetchPeople = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getPeopleStart());
    const allPeople = [];
    let getPeopleUrl = PEOPLE_URL;
    while (getPeopleUrl) {
      const { next, results } = await api.getPeople(getPeopleUrl);
      allPeople.push(...results);
      getPeopleUrl = next || '';
    }
    dispatch(getPeopleSuccess(allPeople));
  } catch (err) {
    dispatch(getPeopleFailure(err));
  }
};

export const selectPeople = (state: RootState) => state.people;
export default people.reducer;
