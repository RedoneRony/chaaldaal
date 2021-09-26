import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Club from "./components/Club/Club";

function App() {
  return (
    <div className="App">
      {/* call header and club component */}
      <Header></Header>
      <Club></Club>
    </div>
  );
}

export default App;
