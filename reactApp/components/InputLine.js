import React from 'react';
import ReactDOM from 'react-dom';

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
        <button onClick={() => this.props.submit()} type="button">Add todo</button>
      </div>
    );
  };
};

export default InputLine;
