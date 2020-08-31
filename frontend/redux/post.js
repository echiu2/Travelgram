import axios from "axios";

const HOME_POST = "HOME_POST";
const CREATE_POST = "CREATE_POST"

//action creator - always plain objects - reducers only listen to actions
const _homePost = (post) => ({
  type: HOME_POST,
  post,
})

const _createPost = (post) => ({
  type: CREATE_POST,
  post,
})

//thunk - dispatches an action for the reducer
export const homePost = (token) => (
  async (dispatch) => {
    const options = {
      headers: { 'Authorization': `Bearer ${token}` }
    }
    const post = await axios.get('/api/post', options)
    if (post) {
      dispatch(_homePost(post.data))
    }
  }
)

export const createPost = (newPost) => (
  async (dispatch) => {
    const new_post = (await axios.post('/api/post', { caption: newPost })).data
    if (new_post) {
      dispatch(_createPost(new_post))
    }
  }
)

//holds the state 
export const postReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_POST:
      return [...state, action.post]
    case HOME_POST:
      state = action.post;
    default:
      return state;
  }
};
