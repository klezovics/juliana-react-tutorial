import axios from 'axios';
import request from "superagent";

// TODO: Add react query code here to cache data
// Also, give 3 compelling use cases for using react query

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = async () => {
    try {
        const response = await axios.get(apiUrl);
        console.log("Data from axios", response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

