import Trellie from "../components/Trellie/Trellie";
import trellies from "../Data/trellie";
import './App.css';

const App = () =>{
  let render = trellies.map(object =>{
    return <Trellie key={object.id} trellie={object}/>
  })
  return (
    <>
    {render}
    </>
  );
}

export default App;
