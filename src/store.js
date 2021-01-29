import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

//add middleware as params in this function
const middleware = applyMiddleware(thunk);

//create store
export default createStore(reducer, compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f));
