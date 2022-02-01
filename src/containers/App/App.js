import React from "react";

import "./App.css";
import {tweets} from "../../constants";
import Tweet from "../../components/Tweet/Tweet"
import TweetBox from "../../components/TweetBox/TweetBox"
import Home from "../../containers/Home"
import * as PropTypes from 'prop-types'

console.log(tweets);

const App = ({children}) => (
    <div>
        {/* <h1 className="username">{tweets[1].username}</h1> */}
        <main>
            {children}
        </main>
    </div>
);

App.propTypes = { 
    children: PropTypes.node.isRequired,
}

export default App;
