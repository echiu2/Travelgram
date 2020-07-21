import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunks from 'redux-thunk'

const userReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_USER:
            state = action.user;
            break
    }
    return state;
};

const reducer = combineReducers({
    user: userReducer
})

const store = createStore(reducer, applyMiddleware(thunks, logger));

export default store