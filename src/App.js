import './App.css';
import Todo from "./components/todo";

function App() {
  return (
    <div className="App">
      <Todo initialCount={0}/>
    </div>
  );
}

export default App;
