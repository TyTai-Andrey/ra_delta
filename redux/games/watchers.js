// Core
import { all, call, takeLatest } from 'redux-saga/effects';

// Types
import { GamesTypes } from './types';

// Workers
import { fetchGames } from './workers';

function* watchFetchGames() {
  yield takeLatest(GamesTypes.FETCH_GAMES_ASYNC, fetchGames);
}

export function* watchGames() {
  yield all([call(watchFetchGames)]);
}
