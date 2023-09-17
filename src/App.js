// import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import NavList from './components/NavList';
import TodoView from './components/TodoView';
import TodoTask from './components/TodoTask';

function App() {


  return (
    <div className="App">
      <div className='container' >
        <Sidebar />
        <NavList />
        <TodoTask />
        <TodoView />
      </div>
    </div>
  );
}

export default App;
