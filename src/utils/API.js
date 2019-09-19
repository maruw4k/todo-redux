import axios from "axios";

const fetchTodos = () => {
  return axios.get(
    "https://my-json-server.typicode.com/maruw4k/fake-rest-server/todos"
  );
};

const addNewTodo = ( title ) => {
  return axios.post(
    "https://my-json-server.typicode.com/maruw4k/fake-rest-server/todos",
    {
      title: title,
      completed: false
    }
  );
};

export default {
  fetchTodos: fetchTodos,
  addNewTodo: addNewTodo
};
