import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine'
import TodoList from './TodoList';

let dummyData = [
    {
      taskText: "Catch 'em all",
      completed: false
    },
    {
      taskText: "Become Hokage",
      completed: false
    }
]

//A box around the whole thing
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  };
  addTodo(newTodo) {
    dummyData.push({
      taskText: newTodo,
      completed: false
    });
    this.setState({todos: dummyData});
  };
  removeTodo(index) {
    dummyData.splice(index, 1);
    this.setState({todos: dummyData})
  }
  componentDidMount() {
    this.setState({todos: dummyData})
  };
  render() {
    return(
      <div>
        <InputLine submit={(t) => this.addTodo(t)}/>
        <TodoList todoXClick={(i) => this.removeTodo(i)} todos={this.state.todos}/>
      </div>
    );
  };
};

export default TodoApp;
