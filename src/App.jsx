import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");


  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, {text: task, completed: false}]);
      setTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return {...task, completed: !task.completed};
      }
      return task;
    });
    setTasks(newTasks);
  };


  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <div className="input-container">
        <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
        </div>
        
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? "completed" : ""}>
              <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App
