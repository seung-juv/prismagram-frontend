import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./Components/App";
import { ApolloProvider } from "react-apollo-hooks";
import Client from "./Apollo/Client";
import saga from "./Saga";
import { configureStore } from "./Store";

const store = configureStore();
store.runSaga(saga);

ReactDOM.render(
  <ApolloProvider client={Client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
