import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className="App">
      {/* call header and Users component */}
      <Header></Header>
      <Users></Users>
    </div>
  );
}

export default App;
