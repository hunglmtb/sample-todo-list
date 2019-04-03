import React, {Component} from 'react';
import './TodoList.css';
import TodoItem from "./TodoItem";

class TodoList extends Component {

  render() {
    const {dataList} =  this.props;
    return (
        <ul className="TodoList">
            {dataList.map((board, index) =>
              <li className="TodoItemRow" key={index}>
                  <TodoItem entry={board} />
              </li>
            )}
        </ul>
    );
  }
}

export default TodoList;
