// Core
import { createReducer } from '@reduxjs/toolkit';

// Actions
import { GamesActions } from './actions';

const initialState = {
  data: {
    count: 0,
    next: null,
    previous: null,
    results: null,
  },
  loading: false,
  error: false,
};

export const GamesReducer = createReducer(initialState, (builder) => {
  builder.addCase(GamesActions.fetchGamesRequest, (state) => {
    state.loading = true;
    state.error = false;
  });
  builder.addCase(GamesActions.setGames, (state, action) => {
    state.data = action.payload;
    state.loading = false;
    state.error = false;
  });
  builder.addCase(GamesActions.fetchGamesSuccess, (state, action) => {
    state.data = {
      ...state.data,
      ...action.payload,
      results: [
        ...(state.data.results || []),
        ...(action.payload.results || []),
      ],
    };
    state.loading = false;
    state.error = false;
  });

  builder.addCase(GamesActions.fetchGamesFailure, (state, action) => {
    state.data = null;
    state.loading = false;
    state.error = true;
  });
});
