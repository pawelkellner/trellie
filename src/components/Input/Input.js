import "./Input.css"

import React from "react";

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            inputValue: ""
        })
    }

    inputTracking = (e) =>{
        this.setState({ inputValue: e.target.value})
    }

    onInputSubmit = (e) =>{
        e.preventDefault();
        if(this.state.inputValue !== ""){
            this.props.onActivityAdded(this.state.inputValue)
            this.setState({ inputValue: ""})
        }
    }

    render(){
        return(
            <form onSubmit={this.onInputSubmit} className="input">
                <label htmlFor="input" className="input__label">Nieuwe activiteit</label>
                <input onChange={this.inputTracking} id="input" className="input__input" type="text" value={this.state.inputValue} placeholder="Voeg een Trellie toe!"/>
            </form>
        );
    }
}

export default Input;