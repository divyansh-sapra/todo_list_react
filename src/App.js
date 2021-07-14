import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import React, { useState, useEffect } from 'react';
import { About } from './MyComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {

      // e - e me hmarepas saare object hai and
      // todo - todo me jo buton click kia hai vo object hai

      return (e !== todo);
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    let sno = (todos.length !== 0) ? todos[todos.length - 1].SNO + 1 : 0;
    const myTodo = {
      SNO: sno,
      TITLE: title,
      DESC: desc
    }
    setTodos([...todos, myTodo]);

  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])          //useeffect states that whenever todos is changed function is called i.e local storage
  return (
    <>
      <Router>
        <Header title="To Do List" searchBar={true} />
        <Switch>
          <Route exact path="/">
            <AddTodo addTodo={addTodo} />
            <Todos heading="My To Do List" todos={todos} onDelete={onDelete} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
