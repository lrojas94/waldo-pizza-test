import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/root.redux';

export const history = createHistory();

const initialState = {};
const middleware = [
    thunk,
    routerMiddleware(history)
];

const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware),
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;