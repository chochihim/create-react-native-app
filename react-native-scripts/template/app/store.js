import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import appReducers from './features/app/reducers';

const reducers = combineReducers({
    app: appReducers,
});

// Create the store
// https://github.com/jhen0409/react-native-debugger/blob/master/docs/redux-devtools-integration.md
// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
