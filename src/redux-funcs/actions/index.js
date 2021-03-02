import React from "react";
import urls from "../../Helpers/api/urls";

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get(urls.URL_UserData)

    dispatch(
        {
            type: FETCH_CURRENT_USER,
            payload: res
        }
    );
}



export const LOGIN = 'LOGIN';
export const loginCreator={
    type:LOGIN
}


export const RECOVER = 'RECOVER';
export const recoveryCreator={
    type:RECOVER
}
