function messageReducer(state = false, action) {
    switch (action.type) {
        case "STATUS_LOGIN":
            return action.payload;
        default:
            return state;
    }
}

export default messageReducer;
