import axios from 'axios';
import request from "superagent";

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// As a basis you need to understand async javascript: https://youtu.be/vn3tm0quoqE?si=E36ok0YmMJzYInja
export const fetchTodos = async () => {
    try {
        const response = await axios.get(apiUrl);
        console.log("Data from axios", response.data);
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
        console.log("Data from fetch", data);
        return data;
    } catch (error) {
        throw error;
    }
};

export const fetchTodosUsingSuperagent = async () => {
    try {
        const response = await request.get(apiUrl);

        console.log("Data from superagent", response.body);
        return response.body;
    } catch (error) {
        throw error;
    }
};
