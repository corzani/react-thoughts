import logo from "./logo.svg";
import "./App.css";
import { lazy } from "react";

const SuspendingButton = lazy(() => import("./LazyComponents")).then(
  (module) => ({
    default: module.SuspendingButton,
  })
);

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
        <SuspendingButton />
      </header>
    </div>
  );
}

export default App;
