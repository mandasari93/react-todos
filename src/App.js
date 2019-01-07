import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 0, text: "Make dinner tonight!" },
        { id: 1, text: "Clean makeup from my face" },
        { id: 2, text: "Try to learn React!" }
      ],
      nextId: 3
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    console.log("Todo added: ", todoText);
  }

  removeTodo(id) {
    console.log("Removing: ", id);
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header /> 
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} reoveTodo={this.removeTodo}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
