import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import TodoList from "./containers/Todos/TodoList";
import store from "./store";
import GlobalStyle from "./assets/styles/GlobalStyle";

const App = (
  <Provider store={store}>
    <GlobalStyle />
    <TodoList />
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));
