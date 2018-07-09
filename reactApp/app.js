import React from 'react';
import ReactDOM from 'react-dom';

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
      <strike>element.taskText</strike> : element.taskText;
    return t;
  }
  render() {
    return(
      <li>
        <button type="button">X</button>
        {this.handleCompletion(this.props.task)}
      </li>
    );
  };
};

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

//A row at the top with an input field and submit button
class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };
  render() {
    return(
      <div>
        <input type="text" placeholder="task"></input>
        <button type="button">Add todo</button>
      </div>
    );
  };
};

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


ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
