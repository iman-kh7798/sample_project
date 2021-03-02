import CallAPI from "./callAPI";


export default class apiCalls {

    static Login = (url, data, onRequestSuccess, onRequestFail, onHttpError, onConnectionFail, onCatch) => {
        let instance = new CallAPI(url, true, false, onRequestSuccess, onRequestFail, onHttpError, onConnectionFail, onCatch);
        instance._post(data);
    }
    static SignUp = (url, data, onRequestSuccess, onRequestFail, onHttpError, onConnectionFail, onCatch) => {
        let instance = new CallAPI(url, true, false, onRequestSuccess, onRequestFail, onHttpError, onConnectionFail, onCatch);
        instance._post(data);
    }

}
