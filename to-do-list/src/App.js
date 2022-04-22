import './css/main.css';
import DisplayToDos from './components/DisplayToDos';
import Todos from './components/Todos';

function App() {
  return (
   
    <div className="App" >
      <h1>Things to do</h1>
      <Todos/>
      <DisplayToDos/>
    </div>
    
   );  
}


export default App;
