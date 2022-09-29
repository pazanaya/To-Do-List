import React from "react";
import {v4 as uuidV4} from "uuid";

const Form = ({input, setInput, toDo, setToDo}) => {

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setToDo([...toDo, {id: uuidV4(), title: input, completed: false}]);
        setInput("");
    };
    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type="text" 
                placeholder="Ingresa tu tarea"
                className="task-input"
                value={input}
                required
                onChange={onInputChange}
            />
            <button 
                className="button-add"
                type="submit"
            >
                Agregar
            </button>
        </form>
    )
}

export default Form;