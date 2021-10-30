import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import "./global.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ChatPage, ProfilePage } from "./pages";
import reportWebVitals from './reportWebVitals';
import './index.css';
import { store, persistor } from "./store";



ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>

            <Switch>
                <Route path="/chat">
                <ChatPage />
            </Route>
                <Route path="/profile">
                    <ProfilePage />
                </Route>

                <Route path="*">
                    <h1>404 page</h1>
                    <div><Link to="/chat">go to Chat</Link></div>

                    <div><Link to="/profile">go to Profile</Link></div>
                </Route>
            </Switch>

    </BrowserRouter>
        </PersistGate>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
