import React from 'react';
import { useTasks } from './DataContext';
import { useParams, Link } from 'react-router-dom';

function TaskDetails() {
  const { taskId } = useParams();
  const { tasks } = useTasks();
  const task = tasks[taskId];

  if (!task) {
    return <h2>Nie znaleziono zadania</h2>;
  }

  return (
    <div>
      <h1>{task.text}</h1>
      <p>
        <strong>Szczegóły:</strong> {task.details}
      </p>
      <p>{task.completed ? 'Zadanie ukończone' : 'Zadanie do zrobienia'}</p>

      <Link to="/">
        <button>Powrót do listy</button>
      </Link>
    </div>
  );
}

export default TaskDetails;
