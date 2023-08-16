export const deletePost = (postId) => ({
    type: 'DELETE_POST',
    payload: postId
});

export const fetchDeleteUser = (postId) => async (dispatch) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE'
        });

        if (response.status === 200) {
            dispatch(deletePost(postId));
        }
    } catch (e) {
        console.error(e);
    }
}
