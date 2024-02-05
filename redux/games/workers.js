// Core
import { put, call, select } from 'redux-saga/effects';

// Actions
import { GamesActions } from './actions';

// Api
import { getGamesNext } from './selectors';
import { getClientAxios } from '@/api/BaseApi';

export function* fetchGames() {
  const next = yield select(getGamesNext);
  yield put(GamesActions.fetchGamesRequest());

  const { data } = yield call(getClientAxios.get, next);
  if (data) {
    yield put(GamesActions.fetchGamesSuccess(data));
  } else {
    yield put(GamesActions.fetchGamesFailure());
  }
}
