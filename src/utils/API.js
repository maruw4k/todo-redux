import axios from "axios";

//This is FAKE API, changes aren't persisted
const apiUrl = "https://my-json-server.typicode.com/maruw4k/fake-rest-server/todos";

const fetchTodos = () => {
    return axios.get(apiUrl);
};

const addNewTodo = title => {
    return axios.post(apiUrl, {
        title: title,
        completed: false
    });
};

const toggleTodo = (id, completed) => {
    return axios.patch(`${apiUrl}/${id}`, {
        completed: completed
    });
};

export default {
    fetchTodos: fetchTodos,
    addNewTodo: addNewTodo,
    toggleTodo: toggleTodo
};
