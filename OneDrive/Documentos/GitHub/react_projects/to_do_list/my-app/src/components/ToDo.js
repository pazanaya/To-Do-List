import React from "react";

const ToDoList = ({ toDo, setToDo }) => {

    const handleDelete = ({id}) => {
        setToDo(toDo.filter((todo) => todo.id !== id));
    }
    
  return (
    <div>
      {toDo.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className="button-complete task-button">
                <i className="fa fa-check-circle"></i>
            </button>
            <button className="button-edit task-button">
                <i className="fa fa-edit"></i>
            </button>
            <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ToDoList;
