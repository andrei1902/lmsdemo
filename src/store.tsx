import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

//add middleware as params in this function
const middleware = applyMiddleware(thunk);

export type AppState = ReturnType<typeof reducer>
export const store = createStore(reducer, compose(middleware));
