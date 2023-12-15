import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./redux/store";

import "./styles/globals.css";

const target = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  target
);
