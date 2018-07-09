import React from 'react';
import ReactDOM from 'react-dom';

let dummyData = [
  "Buy groceries",
  "Call mom",
  "Clean room"
];

//An individual todo item
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };
  render() {
    return(
      <li>
        <button type="button">X</button>
        {this.props.task}
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
        {dummyData.map((item) => <Todo task={item}/>)}
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
      null
    );
  };
};

//A box around the whole thing
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };
  render() {
    return(
      null
    );
  };
};


ReactDOM.render(<TodoList />,
   document.getElementById('root'));
