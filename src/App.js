import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href="../public/kanbas/home.html">Kanbas</a>
        <a href="../public/labs/a1/index.html">Lab 1</a>
        <a href="../public/labs/a2/index.html">Lab 2</a>
      </header>
    </div>
  );
}

export default App;
