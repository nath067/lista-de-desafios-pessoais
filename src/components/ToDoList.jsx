import React, { useState, useCallback } from 'react';
import '../App.css';
import GerenciarTarefa from './GerenciarTarefa';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = useCallback(() => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
    }
  }, [newTask]);

  const updateTask = (index, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => (i === index ? updatedTask : task))
    );
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Lista de desafios pessoais</h2>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Novo desafio"/>
      <button className="botao" onClick={addTask}>
        Adicionar desafio
      </button>

      <ul className="lista-tarefas">
        {tasks.map((task, index) => (
          <GerenciarTarefa
            key={index}
            task={task}
            index={index}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
