import React, { useState, useEffect } from 'react';
import axios from "axios";
function TodoById() {
    const [todo, setTodo] = useState(null);
    const [id, setId] = useState(1); // Default ID is 1, you can change it
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getData = async () => {
            console.log("Runnin effect for id", id)
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            setTodo(response.data);
            setLoading(false);
        }

        getData()

    }, [id]); // Run the effect whenever 'id' changes

    const handleInputChange = (event) => {
        console.log("new id", event.target.value)
        setId(event.target.value);
    };

    return (
        <div>
            <h1>Fetch Todo by ID</h1>
            <form>
                <label>
                    Todo ID:
                    <input
                        type="number"
                        value={id}
                        onChange={handleInputChange}
                    />
                </label>
                {/*<button type="submit">Fetch Todo</button>*/}
            </form>
            {loading ? (
                <p>Loading...</p>
            ) : todo ? (
                <div>
                    <h2>Todo ID: {todo.id}</h2>
                    <h3>Title: {todo.title}</h3>
                    <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
                </div>
            ) : (
                <p>No todo found with ID {id}</p>
            )}
        </div>
    );
}

export default TodoById;
