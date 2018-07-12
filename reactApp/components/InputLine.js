import React from 'react';
import ReactDOM from 'react-dom';

//A row at the top with an input field and submit button
class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ''
    };
  };
  handleTyping(event) {
    this.setState({
      typedText: event.target.value
    });
  };
  handleSubmit() {
    this.props.submit(this.state.typedText);
    this.setState({
      typedText: ''
    });
  };
  render() {
    return(
      <div>
        <input onChange={(e) => this.handleTyping(e)} value={this.state.typedText} type="text" placeholder="task" />
        <button onClick={() => this.handleSubmit()/*() => this.props.submit()*/} type="button">Add todo</button>
      </div>
    );
  };
};

export default InputLine;
