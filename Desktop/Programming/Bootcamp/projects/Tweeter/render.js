const Renderer = function () {
  const renderPosts = function (posts) {
    const allPosts = tweeter.getPosts();
    $("#posts").empty();
    for (let post of allPosts) {
      const htmlPosts = `<div id="${post.id}" class="post"><p4>${post.text}</p4><div class="comments"></div></div>`;
      $("#posts").append(htmlPosts);
      for (let comment of post.comments) {
        const htmlComment = `<div class="comment" data-id="${comment.id}">${comment.text}</div>`;
        $(`#${post.id}`).find(".comments").append(htmlComment);
      }
    }
  };

  return renderPosts;
};
