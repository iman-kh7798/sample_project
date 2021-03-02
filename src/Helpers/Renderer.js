import Routes from "../Routes";
import {StaticRouter} from "react-router-dom";
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import React from 'react'
import {renderRoutes} from "react-router-config";
import serialize from 'serialize-javascript'
import {CookiesProvider} from 'react-cookie'
import Helmet from "react-helmet";

export default (req, store, context) => {
    const content = renderToString(
        <CookiesProvider cookie={req.universalCookies}>
        <Provider store={store}>
                <StaticRouter location={req.path} context={context}>
                    {renderRoutes(Routes)}
                </StaticRouter>
        </Provider>
        </CookiesProvider>
    )


    const helmet=Helmet.renderStatic()


    return `<html lang="fa">
                <head>
                    ${helmet.title.toString()}
                    ${helmet.meta.toString()}
                    <link rel="stylesheet" href="/main.css">
                </head>
                <body style="direction: rtl">
                    <div id="root">${content}</div>
                    <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                    </script>
                    <script src="/bundle.js"></script>
                </body>
            </html>`
}