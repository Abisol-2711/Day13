import openModal from "./components/openModal";
import "./App.css";

function App() {
  function handleClick() {
    openModal("./modal");
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick} className='btn'>Open Modal</button>
      </header>
    </div>
  );
}

export default App;
