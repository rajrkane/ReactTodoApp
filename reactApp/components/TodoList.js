import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import {Table} from 'semantic-ui-react';

//The box around the assortment of Todos in our picture
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };
  render() {
    return(
      <div class="ui two column centered grid">
        <p></p>
        <Table class="ui center aligned table" style={{padding: "20px", width: "40%"}}>
          {this.props.todos.map((item, index) =>
            <Todo xClick={() => this.props.todoXClick(index)}
              task={item}/>
          )}
        </Table>
      </div>
    );
  };
};

export default TodoList;
