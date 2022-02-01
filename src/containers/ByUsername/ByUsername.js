import React, { Component } from "react";

import "./ByUsername.css";
import { tweets } from "../../constants";
import Tweet from "../../components/Tweet/Tweet";
import TweetBox from "../../components/TweetBox/TweetBox";
import moment from "moment";
import * as PropTypes from "prop-types";

class ByUsername extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
  };

  state = {
    tweets,
  };

  publish = (tweet) => {
    const { tweets } = this.state;

    this.setState({
      tweets: [
        {
          avatar: "http://......",
          username: "noemie",
          fullname: "Noémie",
          content: tweet,
          date: moment().format("DD/MM/YYYY"),
        },
        ...tweets,
      ],
    });
  };

  remove = (index) => {
    const { tweets } = this.state;
    this.setState({ tweets: tweets.filter((tweet, i) => i !== index) });
  };

  render() {
    const { tweets } = this.state;
    const { params } = this.props;
    return (
      <div>
          <h1>{params.username}</h1>
        <TweetBox publish={this.publish} />
        {tweets.map((tweet, index) => tweet.username === params.username && ( //ne renvoyer que les tweets pour lesquels tweet.username === params.username
          <Tweet key={index} index={index} remove={this.remove} {...tweet} />
        ))}
      </div>
    );
  }
}

export default ByUsername;
