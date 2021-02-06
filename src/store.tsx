import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

//add middleware as params in this function
const middleware = applyMiddleware(thunk);

export type AppState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, compose(middleware));
