const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: posts
});

export const fetchAddNewPost = (newPost) => async (dispatch) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${newPost.id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        });

        const post = await response.json();

        
        dispatch(setPosts([post]));
    } catch (e) {
        console.error(e);
    }
};
