import React from "react";
import {LOGIN, RECOVER} from "../actions";


export default function recoveryPagination(state=true,action) {
    switch (action.type){
        case LOGIN:
            return true
        case RECOVER:
            return false
        default:
            return state
    }

}