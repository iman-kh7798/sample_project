import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import thunk from "redux-thunk";
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom"
import Routes from "../Routes";
import {renderRoutes} from "react-router-config";
import reducers from '../redux-funcs/reducers'
import {CookiesProvider} from 'react-cookie'
import axios from "axios";
import urls from "../Helpers/api/urls";




const axiosInstance = axios.create({
    baseURL: urls.URL_Base
});
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

ReactDOM.hydrate(
    <Provider store={store}>
        <CookiesProvider>
                <BrowserRouter>
                    {renderRoutes(Routes)}
                </BrowserRouter>
        </CookiesProvider>
    </Provider>
    , document.querySelector('#root'))