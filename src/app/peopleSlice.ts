/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { AppThunk } from './store';
import { Person } from '../types';
import { peopleUrl } from '../constants/url';

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
    let getPeopleUrl = peopleUrl;
    while (getPeopleUrl) {
      const response = await fetch(getPeopleUrl);
      const { next, results } = await response.json();
      allPeople.push(...results);
      getPeopleUrl = next;
    }
    dispatch(getPeopleSuccess(allPeople));
  } catch (err) {
    dispatch(getPeopleFailure(err));
  }
};

export default people.reducer;
