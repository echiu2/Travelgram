import axios from "axios";

const HOME_POST = "HOME_POST";

const _homePost = (post) => ({
  type: HOME_POST,
  post,
})

export const homePost = () => (
  async (dispatch) => {
      const post = await axios.get('/api/post')
      if (post) {
          dispatch(_homePost(post.data))
      }
  }
)

export const postReducer = (state = [], action) => {
  switch (action.type) {
    case HOME_POST:
      state = action.post;
    default:
      return state;
  }
};
