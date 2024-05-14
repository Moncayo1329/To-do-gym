import React, { useState } from 'react';
import { exercises } from './Data'; // Asumiendo que tienes los datos de ejercicios en un archivo data.js

function TodoForm({ addItem }) {
  const [text, setText] = useState('');
  const [filteredExercises, setFilteredExercises] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setText(value);

    // Filtrar los ejercicios basados en el valor del input
    if (value === 'martes') {
      setFilteredExercises(exercises[value]);
    } else {
      setFilteredExercises([]);
    }
  };

  const handleAddItemClick = (exercise) => {
    // Agregar el ejercicio como una tarea al presionar "Enter" o haciendo clic en un ejercicio
    addItem(exercise.name, 'martes'); // Asumiendo que siempre se agrega al martes
    setText(''); // Limpiar el campo de texto después de agregar la tarea
    setFilteredExercises([]); // Limpiar la lista de ejercicios filtrados
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(text);
    setText('')
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
    
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="What day huh?"
      />
      {/* Mostrar los ejercicios filtrados */}
      <ul>
        {filteredExercises.map((exercise, index) => (
          <li key={index} onClick={() => handleAddItemClick(exercise)}>
            {exercise.name}
          </li>
        ))}
      </ul>
    <button type="submit">Done</button>
    </form>
  );
}

export default TodoForm;
