import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import express from "express";
import {matchRoutes} from "react-router-config";
import cookiesMiddleware from "universal-cookie-express";
import renderer from "./Helpers/Renderer";
import createStore from "./Helpers/createStore";
import routes from "./Routes";

const app = express();


app.use(express.static('public'));

app.use(cookiesMiddleware());





app.get('*', (req, res) => {
    const store = createStore(req);
    console.log(Promise)
    const promises = matchRoutes(routes, req.path).map(
        ({route}) => {
            return route.loadData ? route.loadData(store) : null;
        }
    ).map(
        promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve);
                });
            }
        });

    Promise.all(promises).then(
        () => {
            const context = {};
            const content = renderer(req, store, context);

            if (context.url) {
                return res.redirect(301,context.url);
            }

            if (context.notFound) {
                res.status(404);
            }

            res.send(content);
        }
    )
});
app.listen(
    3000,
    () => {
        console.log("Listening on port 3000")
    }
);
