import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { PersonReducer } from './reducers/index';

const logger = ({ getState }) => next => action => {
    next(action)
}

const store = createStore(PersonReducer, applyMiddleware(logger, thunk))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));
