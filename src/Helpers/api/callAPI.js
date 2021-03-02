import React from "react";
import axios from "axios";
// import {clientGetCookies} from "../../../cookies";
import urls from "./urls";

// import {AuthenticationTokenCookie, AuthenticationTokenPrefix} from "../../constantValues";

class Request {

    constructor(url, isAuthenticationRequired, isWithCredentials, onRequestSuccess, onRequestFail, onHttpError, onConnectionFail, onCatch) {
        this._url = url;
        this._isAuthenticationRequired = isAuthenticationRequired;
        this._isWithCredentials = isWithCredentials;
        this._onRequestSuccess = onRequestSuccess;
        this._onRequestFail = onRequestFail;
        this._onHttpError = onHttpError;
        this._onConnectionFail = onConnectionFail;
        this._onCatch = onCatch;
    }

    onAxiosConfig() {
        let _axiosConfig = undefined;
        // cookie_token = clientGetCookies(AuthenticationTokenCookie),
        // token = cookie_token ? `${AuthenticationTokenPrefix} ${cookie_token}` : '';

        // if (this._isAuthenticationRequired === true) {
        //     _axiosConfig = {
        //         headers: {
        //             Authorization: `${token}`
        //         }
        //     }
        // }
        //
        // if (this._isWithCredentials === true) {
        //     _axiosConfig = {
        //         headers: {
        //             withCredentials: true
        //         }
        //     }
        // }

        return _axiosConfig;
    };

    onUrlConfig() {
        let url = urls.URL_Base + this._url;
        console.log(`Call ${url}`);
        return url;
    };

    onFulfilledResponse(response) {
        if (response.data) {
            console.log('SUCCESS ' + this._url, response);
            this._onRequestSuccess && this._onRequestSuccess(response);
        } else {
            console.log('NOT SUCCESS ' + this._url, response);
            this._onRequestFail && this._onRequestFail(response);
        }
    };

    onRejectedResponse(error) {
        if (error.response) {
            // client received an error response (5xx, 4xx)
            this._onHttpError && this._onHttpError(error);
        } else if (error.request) {
            // client never received a response, or request never left
            this._onConnectionFail && this._onConnectionFail(error);
        } else {
            // anything else
            this._onCatch && this._onCatch(error);
        }
    };

}

export default class CallAPI extends Request {

    constructor(url, isAuthenticationRequired, isWithCredentials, onRequestSuccess, onRequestFail, onHttpError, onConnectionFail, onCatch) {
        super(url, isAuthenticationRequired, isWithCredentials, onRequestSuccess, onRequestFail, onHttpError, onConnectionFail, onCatch);
    };

    _get() {
        axios.get(this.onUrlConfig(), this.onAxiosConfig())
            .then(
                response => this.onFulfilledResponse(response)
            )
            .catch(
                error => this.onRejectedResponse(error)
            );
    };

    _patch(data) {
        axios.patch(this.onUrlConfig(), data, this.onAxiosConfig())
            .then(
                response => this.onFulfilledResponse(response)
            )
            .catch(
                error => this.onRejectedResponse(error)
            );
    };

    _post(data) {
        axios.post(this.onUrlConfig(), data, this.onAxiosConfig())
            .then(
                response => this.onFulfilledResponse(response)
            )
            .catch(
                error => this.onRejectedResponse(error)
            );
    };

    _put(data) {
        axios.put(this.onUrlConfig(), data, this.onAxiosConfig())
            .then(
                response => this.onFulfilledResponse(response)
            )
            .catch(
                error => this.onRejectedResponse(error)
            );
    };

}