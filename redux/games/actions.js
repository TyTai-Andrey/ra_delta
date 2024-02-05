// Core
import { createAction } from '@reduxjs/toolkit';

// Types
import { GamesTypes } from './types';

export const GamesActions = {
  // Sync
  setGames: createAction(GamesTypes.SET_GAMES, (data) => ({
    payload: data,
  })),
  fetchGamesRequest: createAction(GamesTypes.FETCH_GAMES_REQUEST),

  fetchGamesSuccess: createAction(GamesTypes.FETCH_GAMES_SUCCESS, (data) => ({
    payload: data,
  })),

  fetchGamesFailure: createAction(GamesTypes.FETCH_GAMES_FAILURE),

  // Async
  fetchGamesAsync: createAction(GamesTypes.FETCH_GAMES_ASYNC, (filter) => ({
    payload: filter,
  })),
};
