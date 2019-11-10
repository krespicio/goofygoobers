export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_REPOS:
            return { ...state, loading: true };
        case GET_REPOS_SUCCESS:
            return { ...state, loading: false, repos: action.payload.data };
        default:
            return state;
    }
}

export function listRepos(user) {
    return {
        type: GET_REPOS,
        payload: {
            request: {
                url: `/users/${user}/repos`
            }
        }
    };
}