import React from 'react';
import List from './List';
import AddTodo from './AddTodo';
import './App.css';


function App() {
  return (
    <div className="App">
      <AddTodo />
      <List />
    </div>
  );
};

export default App;
