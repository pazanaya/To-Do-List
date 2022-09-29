import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import ToDoList from "./components/ToDo";

const App = () => {
  const [input, setInput] = useState("");
  const [toDo, setToDo] = useState([]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />

        <Form input={input} setInput={setInput} toDo={toDo} setToDo={setToDo} />

        <ToDoList toDo={toDo} setToDo={setToDo} />
      </div>
    </div>
  );
};

export default App;
