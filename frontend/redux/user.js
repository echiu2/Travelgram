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

const UPDATE_SECURITY = 'UPDATE_SECURITY'
const _updateSecurity = (user) => ({
    type: UPDATE_SECURITY,
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

export const updateUser = (options, firstName, lastName, email) => (
    async (dispatch) => {
        const user = await axios.put('/api/user', {firstName, lastName, email}, options)
        //sanity check for updating users
        // console.log("check", user)
        if (user){
            // console.log('user', user)
            dispatch(_updateUser(user.data))
        }
        else{
            console.log("something wrong happened")
        }
    }
)

export const updateUserSecurity = (options, password, newPassword, confirmNewPassword) => (
    async (dispatch) => {
        const user = await axios.put('/api/updateSecurity', {password, newPassword, confirmNewPassword}, options)
        if (user){
            dispatch(_updateSecurity(user.data))
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
                email: action.user.email
            }
        case UPDATE_SECURITY:
            return {
                ...state,
                password: action.user.newPassword
            }
        default:
            return state
    }
};

