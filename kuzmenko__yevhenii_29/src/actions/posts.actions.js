const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: posts
})

export const fetchPosts = () => async (dispatch) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const posts = await response.json();

        dispatch(setPosts(posts));
    } catch(e) {
        console.log(e)
    }
}  


