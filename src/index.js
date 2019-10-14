import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import TodoList from "./containers/Todos/TodoList";
import TodoDetails from "./containers/Todos/TodoDetails";

const App = (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />

      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/details/:id" component={TodoDetails} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));
