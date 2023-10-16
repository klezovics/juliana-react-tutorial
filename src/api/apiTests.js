import fetch from "node-fetch";
import {fetchTodosUsingSuperagent, fetchTodosWithFetchApi} from "./todosApi.js";

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then( response => response.json())
// .then( data => {
//     console.log(data)
// })

// fetchTodosWithFetchApi()
// .then( data => console.log(data))

fetchTodosUsingSuperagent()
.then( data => console.log(data))

