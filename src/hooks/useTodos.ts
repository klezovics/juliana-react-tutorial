import { useState, useEffect } from 'react';
import axios from 'axios';

const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define the URL to the JSONPlaceholder todos endpoint
        const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

        // Fetch data from the API using Axios
        axios
            .get(apiUrl)
            .then((response) => {
                setTodos(response.data);
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
