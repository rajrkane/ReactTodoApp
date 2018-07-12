import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Input} from 'semantic-ui-react';

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
    if (this.state.typedText.trim() !== '') {
      this.props.submit(this.state.typedText);
      this.setState({
        typedText: ''
      });
    };
  };
  render() {
    return(
      <p class="ui center aligned segment">
        <Input onChange={(e) => this.handleTyping(e)} value={this.state.typedText} type="text" placeholder="task" />
        <Button onClick={() => this.handleSubmit()/*() => this.props.submit()*/} type="button">Add todo</Button>
      </p>
    );
  };
};

export default InputLine;
