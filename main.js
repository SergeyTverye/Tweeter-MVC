//Controller
$(function(){
    const tweeter = Tweeter(); // Assuming Tweeter is the model
    const renderer = Renderer(); // Assuming Renderer is the view

    // Render initial posts
    renderer.renderPosts(tweeter.getPosts());

    // Listener on Twit Button
    $("#post").click(function(){
        const postText = $("#input").val();
        tweeter.addPost(postText);
        renderer.renderPosts(tweeter.getPosts());
        $("#input").val(''); //clear the input
    });

    // Dynamic listeners using delegation
    $("#posts").on('click', '.delete-post', function() {
        const postID = $(this).closest('.post').data('id');
        tweeter.removePost(postID);
        renderer.renderPosts(tweeter.getPosts());
    });

    $("#posts").on('click', '.comment-button', function() {
        const postID = $(this).closest('.post').data('id');
        const commentText = $(this).siblings('.comment-input').val();
        tweeter.addComment(postID, commentText);
        renderer.renderPosts(tweeter.getPosts());
    });

    $("#posts").on('click', '.delete-comment', function() {
        const postID = $(this).closest('.post').data('id');
        const commentID = $(this).closest('.comments').data('id');
        tweeter.removeComment(postID, commentID);
        renderer.renderPosts(tweeter.getPosts());
    });
});
