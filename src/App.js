import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./components/TodoItem";

import "./App.css";

class App extends Component {
  state = {
    todoList: [],
    name: "",
  };

  onAddTodo = (event) => {
    event.preventDefault();
    const { name } = this.state;
    const newTodo = {
      id: uuidv4(),
      name,
    };

    this.setState((prevState) => ({
      todoList: [...prevState.todoList, newTodo],
      name: "",
    }));
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { todoList, name } = this.state;

    return (
      <div className="todo_list_container">
        <form className="todo_form_container" onSubmit={this.onAddTodo}>
          <input onChange={this.onChangeName} />
          <button type="submit" className="button" value={name}></button>
        </form>
        <ul className="todo_list">
          {todoList.map((eachTodo) => (
            <TodoItem key={eachTodo.id} todoDetails={eachTodo} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
