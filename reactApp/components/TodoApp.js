import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine'
import TodoList from './TodoList';

let dummyData = [
    {
      taskText: "Be the best like no one ever was",
      completed: false
    },
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
  componentDidMount() {
    this.setState({todos: dummyData})
  };
  render() {
    return(
      <div>
        <InputLine />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  };
};

export default TodoApp;
