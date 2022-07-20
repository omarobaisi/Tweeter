const events = () => {
  $("#post").on("click", function () {
    const newPost = $("#input").val();
    $("#input").val("");
    addPost(newPost);
  });

  $(".delete").each(function () {
    $(this).on("click", function () {
      const postID = $(this).closest(".post").attr("id");
      removePost(postID);
    });
  });

  $(".newCommentButton").each(function () {
    $(this).on("click", function () {
      const newComment = $(this).siblings(".newCommentInput").val();
      const id = $(this).closest(".post").attr("id");
      addComment(id, newComment);
    });
  });

  $(".delete-comment").each(function () {
    $(this).on("click", function () {
      const commentID = $(this).closest(".comment").data().id;
      const postID = $(this).closest(".post").attr("id");
      removeComment(postID, commentID);
    });
  });
};

events();
