import React, {useState} from 'react';
import {Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import "./App.css";

const Header = () => {
  return <>
    <h1>Task App</h1>
  </>
}

const InfoBar = ({taskNumber}) => {
  return <div>Ada {taskNumber} yang perlu diselesaikan</div>
}

const TaskAdder = ({setTasks, tasks}) => {
  const [currentValue, setCurrentValue] = useState('');

  const handleAddTask = () => {
    const newTasks = {
      id: tasks.length + 1,
      message: currentValue
    }
    setTasks([...tasks, newTasks])
    setCurrentValue('');
  }
  return <div className="task-adder">
    <TextField value={currentValue} color="secondary" onChange={event => setCurrentValue(event.target.value)} label="Tambah task" variant="outlined" focused />
    <Button variant="contained" color="primary"  disabled={currentValue === ''} onClick={() => handleAddTask()}>Tambah</Button>
  </div>
}

const Task = ({message, id, setTasks, tasks}) => {
  const handleDelete = () => {
    const updateTasks = tasks.filter(task => task.id !== id);
    setTasks(updateTasks);
  }
  return <div className="container-task">
    <div className="task">
    <div style={{display: "inline-block"}}>{message}</div>
    <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick= { () => handleDelete()} id={id}>Delete</Button>
    </div>
  </div>
}

const TaskLisk = ({tasks, setTasks}) => {
  return tasks.map(task => {
    return <Task message={task.message} id={task.id} setTasks={setTasks} tasks={tasks} />
  })
}

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  return <div className="container">
    <p>
      <Header />
      <InfoBar taskNumber={tasks.length}/>
      <TaskAdder setTasks={setTasks} tasks={tasks}/>
      <TaskLisk tasks={tasks} setTasks={setTasks}/>
    </p>
  </div>
}

const App = () => {
  return <>
    <TaskApp />
  </>
}

export default App;
