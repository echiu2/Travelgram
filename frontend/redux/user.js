import axios from 'axios'

const SET_USER = 'SET_USER'

//action creator - always plain objects - reducers only listen to actions
const _setUser = (user) => ({
    type: SET_USER,
    user
})

//thunk - dispatches an action for the reducer
export const setUser = (username, password) => (
    async (dispatch) => {
        const user = await axios.post('/', { username, password })
        if (user) {
            dispatch(_setUser(user.data))
        }
    }
)
//holds the state 
export const userReducer = (state = [], action) => {
    switch (action.type) {
        case SET_USER:
            state = action.user;
        default:
            return state
    }
};

