import axios from "axios";

const fetchTodos = () => {
  return axios.get(
    "https://my-json-server.typicode.com/maruw4k/fake-rest-server/todos"
  );
};

export default {
  fetchTodos: fetchTodos
};

