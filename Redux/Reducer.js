import {createReducer} from '@reduxjs/toolkit';
import { act } from 'react-test-renderer';

export const newsReducer = createReducer(
  {},
  {
    getNewsRequest: state => {
        state.loading = true;
    },
    getNewsSuccess: (state, action) => {
      state.loading = false
      state.news = action.payload
    },
    getNewsFailure: (state, action) => {
      state.loading = false;
    },
  },
);
