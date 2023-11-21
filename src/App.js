import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
       <Greet name = "John" heroName= "Superman">
        <p>This is children props</p>
       </Greet>
       <Greet name = "Alice" heroName="Wonder Woman">
        <button>Action</button>
       </Greet>
       <Greet name = "Clara" heroName="Cute Woman"/>
       <Welcome name = "John" heroName= "Superman"/>
       <Welcome name = "Alice" heroName="Wonder Woman"/>
       <Welcome name = "Clara" heroName="Cute Woman"/>
       <Hello />
    </div>
  );
}

export default App;
