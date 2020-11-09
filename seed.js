const connection = require('./database/connection');
const { User, Post, FriendRequest } = require('./database/models/index')
const sync = async () => {
  // force: true; wipes out data and replaces it with new entry
  try {
    await connection.sync({ force: true });
    const [edwin, kalvin, brandon] = await Promise.all([
      User.create({ firstName: "edwin", lastName: "chiu", email: "echiu@gmail.com", password: "123" }),
      User.create({ firstName: "kalvin", lastName: "zhao", email: "kzhao@gmail.com", password: "123" }),
      User.create({ firstName: "brandon", lastName: "lau", email: "blau@gmail.com", password: "123" }),
    ]);
    brandon.addFriendId(kalvin)
    kalvin.addFriendId(brandon)
    brandon.addFriendId(edwin)
    edwin.addFriendId(brandon)

    // FriendRequest.create({ userId: edwin.id, friendId: kalvin.id })
    // FriendRequest.create({ userId: kalvin.id, friendId: brandon.id })

    kalvin.addRequested(brandon)
    // kalvin.addRequestedId(edwin)
    // brandon.addRequestedId(kalvin)

    const p = await Promise.all([
      Post.create({ userId: edwin.id, caption: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." }),
      Post.create({ userId: edwin.id, caption: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." }),
      Post.create({ userId: kalvin.id, caption: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." }),
      Post.create({ userId: brandon.id, caption: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." })
    ])
  }
  catch (error) {
    console.log(error)
    throw error;
  }
};
module.exports = sync