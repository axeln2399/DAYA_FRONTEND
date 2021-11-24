function communityReducer(state = [], action) {
    switch (action.type) {
        case "LIST_COMMUNITY":
            return action.payload;
        default:
            return state;
    }
}

export default communityReducer;
