import React from "react";
import {Route, IndexRoute, Redirect} from '@version/react-router-v3';

import App from "./containers/App/App"
import Home from "./containers/Home/Home"
import Page404 from "./containers/Page404/Page404"
import ByUsername from "./containers/ByUsername";


export default (
    <div>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="tweets/:username" component={ByUsername}/>
            <Route path="404" component={Page404}/>
            <Redirect from="*" to="404"/>
        </Route>
    </div>
    
)