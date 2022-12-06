import React from "react";
import Trellie from "../components/Trellie/Trellie";
import trelliesObject from "../Data/trellie";
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = ({ 
      trellies: [],
      labelClicked: 0
    })
  }

  componentDidMount(){
    this.setState({ trellies: trelliesObject})
  }

  onActivityAdded = (input, id) =>{
    let oldState = this.state.trellies;
    let newState = {
        id: oldState[id - 1].activities.length + 2,
        label: "Vandaag",
        description: input
    }
    oldState[id - 1].activities.push(newState);
    this.setState({ trellies: oldState })
  }

  render(){
    let render = this.state.trellies.map(object =>{
      return <Trellie id={object.id} onActivityAdded={this.onActivityAdded} key={object.id} trellie={object} />
    })
    return (
      <>
      {render}
      </>
    );
  }
}

export default App;
