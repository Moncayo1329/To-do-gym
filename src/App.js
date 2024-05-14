import { useState } from 'react';
import './App.css';
import DaySelector from './Days';
import TodoForm from './Form';
import TodoList from './TodoList';

function App() {
  const [items, setItems] = useState([]);
  const [selectedDay, setSelectedDay] = useState('Tuesday'); // Corregido

  const addItem = (text, day) => {
    const newItem = { id: Date.now(), text, day, completed: false };
    setItems([...items, newItem]);
  };

  const toggleComplete = (id) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="App">
      <h1>Mike workout!</h1>
      <DaySelector selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <TodoForm addItem={addItem} />
      <TodoList items={items.filter(item => item.day === selectedDay)} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
