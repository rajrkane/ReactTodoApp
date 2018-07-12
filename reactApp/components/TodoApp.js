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
  toggleTodo(index) {
    dummyData[index].completed = !dummyData[index].completed;
    this.setState({todos: dummyData});
  }
  componentDidMount() {
    this.setState({todos: dummyData})
  };
  render() {
    return(
      <div>
          <InputLine submit={(t) => this.addTodo(t)}/>
          <TodoList todoXClick={(i) => this.toggleTodo(i)} todos={this.state.todos}/>
      </div>
    );
  };
};

export default TodoApp;
