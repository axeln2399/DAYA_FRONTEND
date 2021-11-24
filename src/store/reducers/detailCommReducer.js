function detailCommunityReducer(state = [], action) {
    switch (action.type) {
        case "DETAIL_COMMUNITY":
            return action.payload;
        default:
            return state;
    }
}

export default detailCommunityReducer;
