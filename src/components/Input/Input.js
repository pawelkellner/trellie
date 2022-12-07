import "./Input.css";
import { connect } from "react-redux";
import React from "react";

const Input = (props) => {
  const inputTracking = (e) => {
      props.setInputValueFromRedux(e.target.value);
  };

  const onInputSubmit = (e) => {
    e.preventDefault();
    if (props.inputValueFromRedux !== "") {
      props.onActivityAdded(props.inputValueFromRedux);
    }
  };

  return (
    <form onSubmit={onInputSubmit} className="input">
      <label htmlFor="input" className="input__label">
        Nieuwe activiteit
      </label>
      <input
        onChange={inputTracking}
        id="input"
        className="input__input"
        type="text"
        value={props.inputValueFromRedux}
        placeholder="Voeg een Trellie toe!"
      />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    inputValueFromRedux: state,
  };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        setInputValueFromRedux: (payload) => dispatch({type: "test", payload:payload})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
