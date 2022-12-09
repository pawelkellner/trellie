import React from "react";
import { connect } from "react-redux";

const Label = (props) =>{

    const labelClicked = () =>{
        let oldLabel = props.trelliesFromRedux[props.trellieId - 1].activities[props.activity.id - 1].label;
        let newLabel;
        switch(oldLabel){
            case 'Vandaag':
                newLabel = "Morgen";
                break;
            case 'Morgen':
                newLabel = "Weekend";
                break;
            case 'Weekend':
                newLabel = "Vandaag";
                break;
            default:
                newLabel = "Vandaag";
        }
        changeLabel(newLabel);
    }

     const changeLabel = (newLabel) => {
        let oldTrellies = [...props.trelliesFromRedux];
        oldTrellies[props.trellieId - 1].activities[props.activity.id - 1].label = newLabel
        props.setTrelliesFromRedux(oldTrellies)
    }

    return(
        <h3 onClick={labelClicked} className="activity__label">
            {props.trelliesFromRedux[props.trellieId - 1].activities[props.activity.id - 1].label || "----"}
        </h3>
    );
}

const mapStateToProps = (state) =>{
    return{
        trelliesFromRedux: state.trellies
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setTrelliesFromRedux: (payload) => dispatch({type: "TRELLIES", payload:payload})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Label);