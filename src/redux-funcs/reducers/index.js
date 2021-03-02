import {combineReducers} from "redux";
import authReducer from "./authReducer";
import recoveryPagination from "./recoveryPagination";


export default combineReducers({
    auth: authReducer,
    whatPage:recoveryPagination
});