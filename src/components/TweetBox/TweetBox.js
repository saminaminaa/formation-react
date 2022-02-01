import React, {Component} from "react";
import Tweet from "../Tweet/Tweet";
import * as PropTypes from 'prop-types'


import './TweetBox.css'

class TweetBox extends Component { //Structure composant state full, classe qui etend la classe "component"
    //la classe component est une classe de la librairie react, etendre une classe permet de recuperer ses methodes
    
    static propTypes = { //en state full elles peuvent etre à l'interieyr de la classe
        publish: PropTypes.func.isRequired, //publish est une fonction et est requise.
    }


    UNSAFE_componentWillMount() {//Avant que le composant soit monté
        console.log("will mount");
    }

    componentDidMount() {//Une fois que le composant est monté
        console.log("did mount");
    }

    state = {
        value: "",
    };

    //handleChange = event.target.value => { //arrowfunction //qnd on appelle une methode avec son nom via un evenement(onChange), on a acces à un evenement dans la fonction donc ici event
        //event a une methode qui s'appelle target et qui permet de cibler des choses dans l'evenements
        //target a la methode value qui va cibler la valeur, à chaque fois que je declenche l'evenement g donc 1nvllle valeur qui va etre envoyé à notre fonction handleChange
    handleChange = ({target : {value}}) => {   
        //this.setState({ value: value}) //permet de fixer 1nvl etat pr mon composant
        this.setState({ value }) //qnd on appelle 1clé qui a exactement la mm valeur on peut l'ecrire de cette façon
        //this.setState execute le render pour modifier l'etat de value
    };

    handleSubmit = () => { //methode qui ne prend pas de parametre, pas besoin de l'evenement (on va pouvoir directemebt acceder à la valeur du state)
        const {value} = this.state; //value = contenu du tweet qu'on veut publier
        const {publish} = this.props;

        if (value.length && value.length <=140) {//on veut publier le tweet uniquement si valeur superieure à 0 et inferieure ou egale à 140
            publish(value);

            this.setState({value : ""})//une fois le tweet publié on remet le state à sa valeur initiale
        }
    }

    handleFocus = ({type}) => {
        this._textarea.placeholder = type === 'focus' ? '' : 'Composez votre tweet';
    }

    render(){
        const {value} = this.state
        console.log("render");
        return(
            <div className="tweetBox">
                <textarea
                    rows={3}
                    placeholder="Composez votre tweet"
                    value={value}
                    onChange={this.handleChange}
                    className={value.length > 140 && "alert"} //si superieur à 140(si c vrai) alors il aura la class alert, sinon il aura la classe "false"
                    ref={t => this._textarea = t}
                    onFocus={this.handleFocus}
                    onBlur={this.handleFocus}
                />
                <div className="action">
                    <span className="count">{140 - value.length}</span>
                    <button
                        type="button"
                        disabled={!value.length || value.length > 140} //bouton desactivé si la longueur de la valeur est de 0 ou alors si elle est superieure à 140
                        onClick={this.handleSubmit} //quand je soumet mon tweet
                    >
                        Tweet
                    </button>
                </div>
            </div>
        )
    }
}

export default TweetBox;