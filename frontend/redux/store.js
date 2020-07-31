import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunks from 'redux-thunk'
import logger from 'redux-logger';
import { userReducer } from '../redux/user'
import { postReducer, createPost } from '../redux/post'

const reducer = combineReducers({
    user: userReducer,
    post: postReducer
})

const store = createStore(reducer, applyMiddleware(thunks, logger));

export default store