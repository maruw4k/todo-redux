import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoList from "./containers/Todos/TodoList";
import TodoDetails from "./containers/Todos/TodoDetails";
import NotFound from "./containers/NotFound";

const App = (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />

      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/details/:id" component={TodoDetails} />
        <Route path="*" render={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));
