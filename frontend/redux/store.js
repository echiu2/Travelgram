import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunks from 'redux-thunk'
import logger from 'redux-logger';
import { userReducer } from '../redux/user'
import { postReducer, createPost } from '../redux/post'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducer = combineReducers({
    user: userReducer,
    post: postReducer,
})

const persistConfig = {
    key: 'root',
    storage,
  }
  
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, applyMiddleware(thunks, logger));
export const persistor = persistStore(store)


