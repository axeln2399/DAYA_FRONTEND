import { combineReducers } from "redux";
import loginReducer from "./statusLogin";
import communityReducer from "./communityReducer";
import detailCommunityReducer from "./detailCommReducer";
import listNasabahReducer from "./listNasabahReducer";
import detailNasabahReducer from "./detailNasabahReducer";
import idNasabahReducer from "./idNasabahReducer";

export default combineReducers({
    loginReducer,
    communityReducer,
    detailCommunityReducer,
    listNasabahReducer,
    detailNasabahReducer,
    idNasabahReducer,
});
