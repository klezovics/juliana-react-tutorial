import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const fetchTodos = async () => {
    console.log("Fetching data!!!")
    const response = await axios.get(apiUrl);
    return response.data;
};

function App() {

    //TODO: Try this out with various data generators other than axios fetch
    const { data, error, isLoading } = useQuery('todos', fetchTodos);

    if (isLoading) return <div>Loading...</div>;
    if( error ) return <div>{error}</div>;

    // @ts-ignore
    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {data.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
