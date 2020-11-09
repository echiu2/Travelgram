import axios from 'axios'

const LOAD_REQUESTS = 'LOAD_REQUESTS'

const _loadRequests = (requests) => ({
    type: LOAD_REQUESTS,
    requests
})

export const loadRequests = (token) => (
    async (dispatch) => {
        const options = {
            headers: { 'Authorization': `Bearer ${token}` }
        }
        const requests = await axios.get('/api/friendRequests', options)
        console.log('requests', requests)
        dispatch(_loadRequests(requests.data))
    }
)

export const requestsReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_REQUESTS:
            return action.requests
        default:
            return state;
    }
};