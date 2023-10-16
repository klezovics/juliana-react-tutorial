import axios from 'axios';
import request from "superagent";

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchTodosWithFetchApi = async () => {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export const fetchTodosUsingSuperagent = async () => {
    try {
        const response = await request.get(apiUrl);
        return response.body;
    } catch (error) {
        throw error;
    }
};
