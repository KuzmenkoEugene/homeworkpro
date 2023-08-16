const initialState = {
    postsList: []
};

export const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DELETE_POST': {
            state = {
                ...state,
                postsList: state.postsList.filter(post => post.id !== action.payload)
            }
            
            break;
        }
        case 'SET_POSTS': {
            state = {
                ...state,
                postsList: [...state.postsList, ...action.payload]
            }

            break;
        };
    }

    return state;
}
