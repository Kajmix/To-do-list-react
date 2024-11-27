import React, { useState } from 'react';
import { useTasks } from './DataContext';
import { Link } from 'react-router-dom';

function App() {
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const { tasks, addTask, removeTask, toggleTaskCompletion } = useTasks();

  const handleAddTask = () => {
    if (newTask.trim() && newDescription.trim()) {
      addTask({
        text: newTask,
        completed: false,
        details: newDescription,
      });
      setNewTask('');
      setNewDescription('');
    }
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Dodaj nowe zadanie"
      />
      <textarea
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        placeholder="Opis szczegółów zadania"
        rows="4"
        style={{ width: '100%', margin: '10px 0', padding: '10px' }}
      />
      <button onClick={handleAddTask}>Dodaj</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <Link to={`/task/${index}`}>
              <h1
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                {task.text}
              </h1>
            </Link>
            <label>
              Wykonane:
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
            </label>
            <button onClick={() => removeTask(index)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
