import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EventTest from './event'
import * as serviceWorker from './serviceWorker';
import JudgeTest from './judge'
import FormTest from './form';
import CalculatorTest from './boiling';
import TodoList from './todolist';

function app(){
    ReactDOM.render(
        <React.StrictMode>
          <App />
          <EventTest />
          <JudgeTest />
          <FormTest />
          <CalculatorTest />
          <TodoList />
        </React.StrictMode>,
        document.getElementById('root')
      );
}
setInterval(app,1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
