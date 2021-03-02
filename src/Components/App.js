import React from 'react'
import {renderRoutes} from "react-router-config";
import {fetchCurrentUser} from "../redux-funcs/actions";
import './styles.css';
import Helmet from "react-helmet";


function App({route}) {


    return (
        <>
            <Helmet>
                <title>V Clothes</title>
            </Helmet>
            {renderRoutes(route.routes)}
        </>    );
}

export default {
    component: App,
    loadData: ({dispatch}) => {
        return  dispatch(fetchCurrentUser())
    }
}