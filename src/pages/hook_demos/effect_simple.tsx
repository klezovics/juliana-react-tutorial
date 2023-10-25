import React, { useState, useEffect } from 'react';

function TodoById() {
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/`)
            .then((response) => response.json())
            .then((data) => {
                setTodos(data);
            })
            .catch((error) => {
                console.log('Error fetching todo:', error);
            });
    }, []); // Run the effect whenever 'id' changes


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // 'id' will be updated by user input, triggering the useEffect.
    // };

    return (
        <div>
            <h1>Fetch Todo by ID</h1>
            <ul>
                {todos && todos.map((todo) => (
                    <li key={todo.id}>
                        <h2>Todo ID: {todo.id}</h2>
                        <h3>Title: {todo.title}</h3>
                        <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
                    </li>
                    ))}
            </ul>
        </div>
    );
}

export default TodoById;
