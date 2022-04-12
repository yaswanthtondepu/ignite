const initialState = {
    game: {},
    screenshots: {},
    isLoading: true,
};

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                game: action.payload.game,
                screenshots: action.payload.screenshots,
                isLoading: false,
            };
        case "LOADING":
            return {
                ...state,
                isLoading: true,
            }
        default:
            return { ...state }
    }
}

export default detailReducer;