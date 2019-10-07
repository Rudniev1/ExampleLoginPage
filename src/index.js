import React from "react";
import ReactDOM from "react-dom";
import ValidatedLoginForm from "./ValidatedLoginForm";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ValidatedLoginForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
