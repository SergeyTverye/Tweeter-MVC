const Renderer = function() {
    const renderPosts = function(posts) {
        $("#posts").empty();
        for (let post of posts) {
            let postElement = $("<div class='post' data-id='" + post.id + "'></div>");
            postElement.append("<p class='post-text'>" + post.text + "</p>");

            // add delete post button
            postElement.append("<button class='delete-post'>Delete Post</button>");

            for (let comment of post.comments) {
                let commentElement = $("<div class='comments' data-id='" + comment.id + "'></div>");
                commentElement.append("<p class='comment-text'>" + comment.text + "</p>");

                // add delete comment button
                commentElement.append("<button class='delete-comment'>Delete Comment</button>");

                postElement.append(commentElement);
            }

            // add comment form
            let commentForm = $("<div class='comment-form'></div>");
            commentForm.append("<input type='text' class='comment-input' placeholder='Write a comment...'>");
            commentForm.append("<button class='comment-button'>Comment</button>");

            postElement.append(commentForm);

            $("#posts").append(postElement);
        }
    }
    return {
        renderPosts: renderPosts
    }
}
