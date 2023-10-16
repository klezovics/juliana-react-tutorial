import {useQuery} from "react-query";
import {fetchTodos} from "../api/todosApi";

// notice how little boilerplate we have
export const useTodosReactQuery = () => {
    return useQuery('todos', fetchTodos);
};