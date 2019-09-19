import axios from "axios";

//This is FAKE API, changes aren't persisted

const fetchTodos = () => {
  return axios.get(
    "https://my-json-server.typicode.com/maruw4k/fake-rest-server/todos"
  );
};

const addNewTodo = title => {
  return axios.post(
    "https://my-json-server.typicode.com/maruw4k/fake-rest-server/todos",
    {
      title: title,
      completed: false
    }
  );
};

const toggleTodo = (id, completed) => {
  return axios.patch(
    `https://my-json-server.typicode.com/maruw4k/fake-rest-server/todos/${id}`,
    {
      completed: completed
    }
  );
};

export default {
  fetchTodos: fetchTodos,
  addNewTodo: addNewTodo,
  toggleTodo: toggleTodo
};
