function detailNasabahReducer(state = [], action) {
    switch (action.type) {
        case "DETAIL_NASABAH":
            return action.payload;
        default:
            return state;
    }
}

export default detailNasabahReducer;
