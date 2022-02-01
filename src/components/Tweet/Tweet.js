import React, {Component} from "react";
import * as PropTypes from 'prop-types'
import FontAwesome from "react-fontawesome";
import './Tweet.css';
import moment from "moment";

class Tweet extends Component{
    static propTypes = {
        username: PropTypes.string.isRequired, //permet de creer des erreurs en cas de mauvaises utilisations
        remove : PropTypes.func.isRequired,
    }

    static defaultProps = {
        date: moment().format('DD/MM/YYYY'),//si je ne passe pas de date je veux que celle par defaut soit la date d'ajd
    }

    state = {
        isFocus: false,
    };

    handleFocus = ({type}) => { //type de l'evenement
        this.setState({isFocus : type === 'mouseenter'}) //isFocus a l'etat de l'egalité "type === 'mouseenter'"
        //donc si egalité vrai alors isFocus vrai, si l'evenement est de type mouseenter alors a l'etat true
    }

    render() {
        const {username, index, remove} = this.props;
        const {isFocus} = this.state;
        return(
            <div>
                <h1>{username}</h1>
                {username === "noemie" && (
                    <FontAwesome
                        className="gray trash"
                        name={isFocus ? "trash" : "bacon"}
                        onMouseEnter={this.handleFocus}
                        onMouseLeave={this.handleFocus}
                        onClick={() => remove(index)}//syntaxe à utiliser si parametre autre que ceux renvoyés par l'evenement
                    />
                )}
            </div>
        )
    }

}



// const Tweet = props => (
//     <h1>{props.username}</h1>
// );

// Tweet.propTypes = {
//     username: PropTypes.string.isRequired, //permet de creer des erreurs en cas de mauvaises utilisations
// }

export default Tweet;