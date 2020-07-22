import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunks from 'redux-thunk'
import logger from 'redux-logger';
import { userReducer } from '../redux/user'
const reducer = combineReducers({
    user: userReducer
})

const store = createStore(reducer, applyMiddleware(thunks, logger));

export default store