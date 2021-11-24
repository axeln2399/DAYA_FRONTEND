function idNasabahReducer(state = "", action) {
    switch (action.type) {
        case "ID_NASABAH":
            return action.payload;
        default:
            return state;
    }
}

export default idNasabahReducer;
