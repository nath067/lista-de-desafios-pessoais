import React, { useState } from 'react';

const GerenciarTarefa = ({ task, index, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleUpdate = () => {
    updateTask(index, editedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTask(task);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button className="update" onClick={handleUpdate}>Salvar</button>
          <button className="cancel" onClick={handleCancel}>Cancelar</button>
        </>
      ) : (
        <>
          {task}
          <button className="edit" onClick={() => setIsEditing(true)}>Editar</button>
        </>
      )}
      <button className="delete" onClick={() => deleteTask(index)}>Deletar</button>
    </li>
  );
};

export default GerenciarTarefa;
