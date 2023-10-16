import {useQuery} from "react-query";
import {fetchTodos} from "../api/todosApi";

// notice how little boilerplate we have
/*
    This is how you use it
    const { data, isLoading, isError, error } = useTodos();
 */
export const useTodosReactQuery = () => {
    return useQuery('todos', fetchTodos);
};