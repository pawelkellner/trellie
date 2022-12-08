import "./Input.css";
import React from "react";
import {connect} from "react-redux";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
  }
  inputTracking = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  onInputSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputValue !== "") {
      this.props.onActivityAdded(this.state.inputValue);
    }
  };

  onActivityAdded = (event) =>{
    event.preventDefault();
    let oldState = [...this.props.trelliesFromRedux];
    let newState = {
        id: oldState[this.props.id - 1].activities.length + 2,
        label: "Vandaag",
        description: this.state.inputValue
    }
    oldState[this.props.id - 1].activities.push(newState);
    this.props.setTrelliesFromRedux(oldState)
  }


  render() {
    return (
      <form onSubmit={this.onActivityAdded} className="input">
        <label htmlFor="input" className="input__label">
          Nieuwe activiteit
        </label>
        <input
          onChange={this.inputTracking}
          id="input"
          className="input__input"
          type="text"
          value={this.state.inputValue}
          placeholder="Voeg een Trellie toe!"
        />
      </form>
    );
  }
}

const mapStateToProps = (state) =>{
   return{
      trelliesFromRedux: state.trellies,
   }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    setTrelliesFromRedux: (payload) => {dispatch({type: "TRELLIES", payload: payload})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
