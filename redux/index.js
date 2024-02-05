// Core
import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';

// Reducers
import { GamesReducer } from './games/reducer';

// Watchers
import { watchGames } from './games/watchers';

export const rootReducer = () =>
  combineReducers({
    games: GamesReducer,
  });

export function* rootSaga() {
  yield all([call(watchGames)]);
}
