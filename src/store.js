import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { pingEpic } from './epics';
import { pingReducer } from './reducers'

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    pingReducer,
    /* preloadedState, */
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  );

  epicMiddleware.run(pingEpic);

  return store;
}
