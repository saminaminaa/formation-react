import React, { Component } from "react";

import "./Home.css";
import { tweets } from "../../constants";
import Tweet from "../../components/Tweet/Tweet";
import TweetBox from "../../components/TweetBox/TweetBox";
import moment from "moment";
// import { Component } from 'react/cjs/react.production.min';

// const Home = props => (
//     <div>
//         {props.children}
//     </div>
// );

class Home extends Component {
  state = {
    tweets, //meme chose que tweets: tweets
  };

  publish = (tweet) => {
    const { tweets } = this.state;

    this.setState({
      tweets: [
        {
          avatar: "http://......",
          username: "noemie",
          fullname: "Noémie",
          content: tweet, //valeur du textarea
          date: moment().format("DD/MM/YYYY"), //date du jour //moment = dependance qui permet d'obtenir la date
        },
        ...tweets, //pour mettre le tweet au dessus de tt les autres (tt en haut) (... = spread oparator jsp quoi)
      ],
    });
  };

  remove = index => {
      const {tweets} = this.state;
      this.setState({tweets: tweets.filter((tweet, i) => i !== index)}) //renvoi tout ce qui est different de "index", ne va donc pas renvoyer le tweet correspondant à l'index et donc le nouveau tableau de tweet contiendra tous les tweets sauf celui correspondant à l'index.
  }

  render() {
    const { tweets } = this.state;
    return (
      <div>
        <TweetBox publish={this.publish}/>
        {tweets.map((tweet, index) => (
          <Tweet key={index} index={index} remove={this.remove} {...tweet} />
        ))}
      </div>
    );
  }
}

export default Home;
