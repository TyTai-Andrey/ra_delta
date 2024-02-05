export const getGamesReducer = (store) => store.games;

export const getGames = (store) => getGamesReducer(store);

export const getGamesLoading = (store) => getGamesReducer(store).loading;
export const getGamesError = (store) => getGamesReducer(store).error;

export const getGamesData = (store) => getGamesReducer(store).data;

export const getGamesResult = (store) => getGamesData(store).results;
export const getGamesTotal = (store) => getGamesData(store).count;
export const getGamesNext = (store) => getGamesData(store).next;
