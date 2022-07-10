$("#post").on("click", function () {
  const newPost = $("#input").val();
  addPost(newPost);
});

const deletePost = () => {
  $(".delete").each(function () {
    $(this).on("click", function () {
      const postID = $(this).closest(".post").attr("id");
      removePost(postID);
    });
  });
};
deletePost();

const newComment = () => {
  $(".newCommentButton").each(function () {
    $(this).on("click", function () {
      const newComment = $(this).siblings(".newCommentInput").val();
      const id = $(this).closest(".post").attr("id");
      addComment(id, newComment);
    });
  });
};
newComment();

const deleteComment = () => {
  $(".delete-comment").each(function () {
    $(this).on("click", function () {
      const commentID = $(this).closest(".comment").data().id;
      const postID = $(this).closest(".post").attr("id");
      removeComment(postID, commentID);
    });
  });
};
deleteComment();
