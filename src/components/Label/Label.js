import React from "react";
import { connect } from "react-redux";

class Label extends React.Component{
    constructor(props){
        super(props);
        this.state = {label: ""}
        console.log(this.props.trelliesFromRedux[props.trellieId - 1].activities)
    }

    componentDidMount(){
        this.setState({label: ""})
    }

    labelClicked = () =>{
        let oldLabel = this.state.label;
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
        }
        if(this.props.trelliesFromRedux[this.props.id - 1])
        this.changeLabel(newLabel);
    }

    changeLabel = (newLabel) => {
        let oldActivity = [...this.props.trelliesFromRedux];
        let newActivity = oldActivity[this.props.id - 1].activities.map((activity) => {
            if(activity.id === activity.id){
                activity.label = newLabel
                return activity
            }else{
                return activity
            }
        })
        oldActivity[this.props.id - 1].activities = newActivity;
        console.log(oldActivity)
        this.props.setTrelliesFromRedux(oldActivity)
    }

    render(){
        return(
            <h3 onClick={this.labelClicked} className="activity__label">
                    {this.state.label || "----"}
            </h3>
        );
    }
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