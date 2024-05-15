import React, { useState } from 'react';
import { exercises } from './Data'; // Asumiendo que tienes los datos de ejercicios en un archivo data.js

function TodoForm({ addItem }) {
  const [text, setText] = useState('');
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setText(value);

    // Filtrar los ejercicios basados en el valor del input
    if (value.includes('martes') || value.includes('miercoles') || value.includes('jueves') || value.includes('viernes')) {
      let filtered = [];
      if (value.includes('martes')) {
        filtered = [...filtered, ...exercises['martes']];
      }
      if (value.includes('miercoles')) {
        filtered = [...filtered, ...exercises['miercoles']];
      }
      if (value.includes('jueves')) {
        filtered = [...filtered, ...exercises['jueves']];
      }
      if (value.includes('viernes')) {
        filtered = [...filtered, ...exercises['viernes']];
      }
      setFilteredExercises(filtered);
    } else {
      setFilteredExercises([]);
    }
  };

  const handleAddItemClick = (exercise) => {
    // Agregar el ejercicio como una tarea incluyendo ambos días si están en el input
    const days = [];
    if (text.includes('martes')) days.push('martes');
    if (text.includes('miercoles')) days.push('miercoles');
    if (text.includes('jueves')) days.push('jueves');
    if (text.includes('viernes')) days.push('viernes');

    addItem(exercise.name, ...days);
    setText(''); // Limpiar el campo de texto después de agregar la tarea
    setFilteredExercises([]); // Limpiar la lista de ejercicios filtrados
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (filteredExercises.length > 0) {
      handleAddItemClick(filteredExercises[0]); // Agrega el primer ejercicio filtrado si existe
    } else {
      const days = [];
      if (text.includes('martes')) days.push('martes');
      if (text.includes('miercoles')) days.push('miercoles');
      if (text.includes('jueves')) days.push('jueves');
      if (text.includes('viernes')) days.push('viernes');
      addItem(text, ...days); // Agrega el texto como una tarea incluyendo ambos días si están en el input
    }
    setText(''); // Limpiar el campo de texto después de agregar la tarea
  };

  const handleCompleteDay = () => {
    // Mostrar mensaje de felicitación
    setMessage('¡Bien hecho por hoy chaval! 🎉 🎉');

    // Limpiar tareas del día
    setFilteredExercises([]);

    setTimeout(() => {
      setMessage('');
    }, 3000);
  };
  

  return (
    <div>
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
            <li key={index}  onClick={() => handleAddItemClick(exercise)}>
             <h3>{exercise.name}</h3> 
             <p>{exercise.description}</p> 
             <img src={exercise.img} alt={exercise.name} width="100" />
            </li>
          ))}
        </ul>
      </form>
      {message && <p>{message}</p>}
      <button onClick={handleCompleteDay}>Done</button>
    </div>
  );
}

export default TodoForm;

