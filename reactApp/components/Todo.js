import React from 'react';
import ReactDOM from 'react-dom';

//An individual todo item
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };
  handleCompletion(element) {
    console.log(element)
    var t = element.completed ?
      <strike>{element.taskText}</strike> : element.taskText;
    return t;
  }
  render() {
    return(
      <li>
        <button onClick={() => this.props.xClick()} type="button">X</button>
        {this.handleCompletion(this.props.task)}
      </li>
    );
  };
};

export default Todo;
