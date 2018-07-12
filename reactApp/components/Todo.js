import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'semantic-ui-react';

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
      <p>
        <Button size="mini" onClick={() => this.props.xClick()}>X</Button>
        {this.handleCompletion(this.props.task)}
      </p>
    );
  };
};

export default Todo;
