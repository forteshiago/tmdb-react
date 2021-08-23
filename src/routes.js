import React from "react";
import { Switch, Route } from "react-router-dom";

import Trending from "./views/Trending";
import Favorite from "./views/Favorite";
import More from "./views/More";

function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Trending} />
            <Route path="/trending" component={Trending} />
            <Route path="/favorite" component={Favorite} />
            <Route path="/more" component={More} />

        </Switch>
    );
}

export default Routes;