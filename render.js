const Renderer = function () {
  const allPosts = tweeter.getPosts();
  $("#posts").empty();
  for (let post of allPosts) {
    const htmlPosts = `<div id="${post.id}" class="post"><p4>${post.text}</p4><i class="fa-solid fa-x delete"></i><div class="comments"></div><input class="newCommentInput" placeholder="comment"></input><button class="newCommentButton">add a comment</button></div>`;
    $("#posts").append(htmlPosts);
    for (let comment of post.comments) {
      const htmlComment = `<div class="comment" data-id="${comment.id}"><i class="fa-solid fa-x delete-comment"></i>${comment.text}</div>`;
      $(`#${post.id}`).find(".comments").append(htmlComment);
    }
  }
};
