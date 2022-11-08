import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";
import thunk from 'redux-thunk'
import {forbiddenWordsMiddleware} from "./redux/middleware";

const store = createStore(rootReducer, compose(applyMiddleware(thunk, forbiddenWordsMiddleware)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

reportWebVitals();
