//store/index.js
import createSagaMiddleware, { END } from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers";
const saga = createSagaMiddleware();

export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(saga)));

  store.runSaga = saga.run;
  store.close = () => store.dispatch(END);

  return store;
}
