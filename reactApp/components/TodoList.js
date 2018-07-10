import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

//The box around the assortment of Todos in our picture
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };
  render() {
    return(
      <ul>
        {this.props.todos.map((item) => <Todo task={item}/>)}
      </ul>
    );
  };
};

export default TodoList;
