function nasabahHistoryReducer(state = [], action) {
    switch (action.type) {
        case "HISTORY_NASABAH":
            return action.payload;
        default:
            return state;
    }
}

export default nasabahHistoryReducer;
