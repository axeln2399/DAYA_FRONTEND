function listNasabahReducer(state = [], action) {
    switch (action.type) {
        case "LIST_NASABAH":
            return action.payload;
        default:
            return state;
    }
}

export default listNasabahReducer;
