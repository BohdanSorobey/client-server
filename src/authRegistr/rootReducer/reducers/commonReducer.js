const initialState = {
    data: {},
    pageState: false,
};

export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_PAGE": return {
            ...state,
            pageState: !state.pageState
        };
        case "ADD_DATA": return {
            ...state,
            data: action.payload
        };
        default: return state
    }
};