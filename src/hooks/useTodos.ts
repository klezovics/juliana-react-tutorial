import { useState, useEffect } from 'react';
import { fetchTodos } from '../api/todosApi'; // Import the fetchTodos function

const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTodos() // Use the fetchTodos function
            .then((data) => {
                setTodos(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return { todos, loading, error };
};

export default useTodos;
