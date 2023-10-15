import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        throw error;
    }
};