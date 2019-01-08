import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import TodoInput from "./components/todoInput";
import TodoItem from "./components/todoItem";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 0, text: "Wake up in the morning." },
        { id: 1, text: "Play Queen on Spotify." },
        { id: 2, text: "Try to learn React!" }
      ],
      nextId: 3
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({ id: this.state.nextId, text: todoText });
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {this.state.todos.map(todo => (
              <TodoItem
                todo={todo}
                key={todo.id}
                id={todo.id}
                removeTodo={this.removeTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
