import React, { useState } from "react";

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== "") {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue("");
        }
    };

    const handleToggleComplete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    const handleEditTodo = (index, newText) => {
        const updatedTodos = [...todos];
        updatedTodos[index].text = newText;
        setTodos(updatedTodos);
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    return (
        <div className="form > input ">
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddTodo}>Add Todo</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleComplete(index)}

                        />
                        {todo.completed ? <del>{todo.text}</del> : <span>{todo.text}</span>}

                        <button
                            onClick={() =>
                                handleEditTodo(index, prompt("Enter new text", todo.text))
                            }
                            className="form > button"
                        >
                            Edit
                        </button>
                        <button onClick={() => handleDeleteTodo(index)} className="form > button">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
