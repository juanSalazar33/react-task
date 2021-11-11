import React from 'react';
import { TaskProvider } from '../taskContext';
import { AppUI } from './AppUI';
// import './App.css';

function App() {

  return (
    <TaskProvider>
      <AppUI/>
    </TaskProvider>

  );
}

export default App;
