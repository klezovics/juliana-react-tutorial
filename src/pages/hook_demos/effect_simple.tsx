import React, { useState, useEffect } from 'react';
import axios from "axios";
function TodoById() {
    const [todos, setTodos] = useState(null);

    useEffect(async () => {
        // 1. Get response
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
        // 2. Set response
        setTodos(response.data);
    }, []); // Run the effect whenever 'id' changes

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
