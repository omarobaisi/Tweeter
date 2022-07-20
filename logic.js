//! Model

const Tweeter = function () {
  const posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  let postIdCounter = 2;
  let commentIdCounter = 6;

  const getPosts = () => posts;

  const addPost = (text) => {
    posts.push(text);
    postIdCounter++;
  };

  const getNewPostId = () => postIdCounter + 1;

  const getNewCommentId = () => commentIdCounter + 1;

  return {
    getPosts: getPosts,
    addPost: addPost,
    newPostId: getNewPostId,
    newCommentId: getNewCommentId,
  };
};

//! View

const addPost = function (content) {
  const id = tweeter.newPostId();
  const newPost = {
    text: content,
    id: `p${id}`,
    comments: [],
  };
  tweeter.addPost(newPost);
  Renderer();
  events();
};

const removePost = function (postID) {
  const posts = tweeter.getPosts();
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id == postID) {
      posts.splice(i, 1);
    }
  }
  Renderer();
  events();
};

const addComment = function (postID, text) {
  const posts = tweeter.getPosts();
  const id = tweeter.newCommentId();
  for (let post of posts) {
    const newComment = {
      id: `c${id}`,
      text: text,
    };
    if (post.id == postID) {
      post.comments.push(newComment);
    }
  }
  Renderer();
  events();
};

const removeComment = function (postID, commentID) {
  const posts = tweeter.getPosts();
  for (let post of posts) {
    if (post.id == postID) {
      const comments = post.comments;
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == commentID) {
          comments.splice(i, 1);
        }
      }
    }
  }
  Renderer();
  events();
};
