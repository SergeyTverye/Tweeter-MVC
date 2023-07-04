// Model
function Tweeter() {
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't worry second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];

    let postIdCounter = 3;
    let commentIdCounter = 6;

    function getPosts() {
        return posts;
    }

    function addPost(text) {
        const id = "p" + (++postIdCounter);
        const post = { id, text, comments: [] };
        posts.push(post);
    }

    function removePost(postID) {
        const index = posts.findIndex(post => post.id === postID);
        if (index !== -1) {
            posts.splice(index, 1);
        }
    }

    function addComment(postID, text) {
        const post = posts.find(post => post.id === postID);
        if (post) {
            const id = "c" + (++commentIdCounter);
            const comment = { id, text };
            post.comments.push(comment);
        }
    }

    function removeComment(postID, commentID) {
        const post = posts.find(post => post.id === postID);
        if (post) {
            const index = post.comments.findIndex(comment => comment.id === commentID);
            if (index !== -1) {
                post.comments.splice(index, 1);
            }
        }
    }

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    };
}
