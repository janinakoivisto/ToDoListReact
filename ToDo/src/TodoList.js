import React, { Component } from 'react';
import TodoTable from './TodoTable';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', date: '', todos: []}
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  addTodo = (event) => {
    event.preventDefault();
    const newTodo =  {description: this.state.description, date: this.state.date};
    this.setState({
      date: '',
      description: '',
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div>
        <div>
          <h2>Todo-list</h2>
        </div>
        <div>
          <form onSubmit={this.addTodo}>
            Date: <input type="text" name="date" onChange={this.inputChanged} value={this.state.date}/>
            Description: <input type="text" name="description" onChange={this.inputChanged} value={this.state.description}/>
            <input type="submit" value="Add"/>
          </form>
        </div>
        <TodoTable todos={this.state.todos} />        
      </div>    
    );
  }
}

export default App;