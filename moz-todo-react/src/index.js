import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Work", completed: false },
  { id: "todo-3", name: "Play", completed: false }
];
ReactDOM.render(
    <App tasks={DATA} />,
  document.getElementById('root')
);
