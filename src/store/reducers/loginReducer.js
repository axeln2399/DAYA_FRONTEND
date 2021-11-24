function loginReducer(state = [], action) {
    switch (action.type) {
        case "LOGIN_USER":
            return action.payload;
        case "LOGOUT_USER":
            state = [];
            return state;
        default:
            return state;
    }
}

export default loginReducer;
