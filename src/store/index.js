import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import reducer from './rootReducer';
import saga from './rootSaga';

export const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [
    ...getDefaultMiddleware(),
    sagaMiddleware,
    createLogger({collapsed: true}),
  ];
  const store = configureStore({
    middleware,
    reducer,
  });

  sagaMiddleware.run(saga);

  return store;
};
