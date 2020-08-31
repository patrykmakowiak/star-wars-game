/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import {
  createSlice,
} from '@reduxjs/toolkit';
import { RootState } from './store';

type gameState = {
  scorePlayerA: number;
  scorePlayerB: number;
}

const initialState: gameState = {
  scorePlayerA: 0,
  scorePlayerB: 0,
};

export const score = createSlice({
  name: 'score',
  initialState,
  reducers: {
    incrementScorePlayerA: (state) => {
      state.scorePlayerA += 1;
    },
    incrementScorePlayerB: (state) => {
      state.scorePlayerB += 1;
    },
    incrementScoreBothPlayer: (state) => {
      state.scorePlayerA += 1;
      state.scorePlayerB += 1;
    },
  },
});

export const {
  incrementScorePlayerA,
  incrementScorePlayerB,
  incrementScoreBothPlayer,
} = score.actions;

export const selectScore = (state: RootState) => state.score;
export default score.reducer;
