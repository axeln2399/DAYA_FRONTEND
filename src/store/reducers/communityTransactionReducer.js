function communityTransactionReducer(state = [], action) {
    switch (action.type) {
        case "COMMUNITY_TRANSACTION":
            return action.payload;
        default:
            return state;
    }
}

export default communityTransactionReducer;
