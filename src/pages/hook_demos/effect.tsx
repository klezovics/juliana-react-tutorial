import React, { useState, useEffect } from 'react';

function TodoById() {
    const [todo, setTodo] = useState(null);
    const [id, setId] = useState(1); // Default ID is 1, you can change it
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("Running useEffect for id", id);
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setTodo(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching todo:', error);
                setLoading(false);
            });
    }, [id]); // Run the effect whenever 'id' changes

    const handleInputChange = (event) => {
        setId(event.target.value);
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // 'id' will be updated by user input, triggering the useEffect.
    // };

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
