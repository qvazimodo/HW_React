import React from 'react';
import ReactDOM from 'react-dom';
import "./global.css";
import {ListOfMessages, ListOfRooms} from './components';
import reportWebVitals from './reportWebVitals';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
      <div className = "divv">
      <ListOfRooms/>
    <ListOfMessages />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
