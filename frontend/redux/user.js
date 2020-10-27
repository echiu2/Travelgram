import axios from 'axios'

const SET_USER = 'SET_USER'
//action creator - always plain objects - reducers only listen to actions
const _setUser = (user) => ({
    type: SET_USER,
    user
})

const UPDATE_USER = 'UPDATE_USER'
const _updateUser = (user) => ({
    type: UPDATE_USER,
    user
})

//thunk - dispatches an action for the reducer
export const setUser = (email, password) => (
    async (dispatch) => {
        const user = await axios.post('/api/user', { email, password })
        if (user) {
            dispatch(_setUser(user.data))
        }
    }
)

export const updateUser = (firstName, lastName, email) => (
    async (dispatch) => {
        // console.log(firstName)
        const user = await axios.put('/api/user', {firstName, lastName, email})
        //sanity check for updating users
        console.log("check", user)
        if (user){
            console.log('user', user)
            dispatch(_updateUser(user.data))
        }
        else{
            console.log("something wrong happened")
        }
    }
)

//holds the state 
export const userReducer = (state = [], action) => {
    switch (action.type) {
        case SET_USER:
            state = action.user;
        case UPDATE_USER:
            return {
                ...state,
                firstName: action.user.firstName,
                lastName: action.user.lastName,
                // email: action.user.email
            }
            // state = action.user
        default:
            return state
    }
};

