// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ item, toggleComplete }) => {
  return (
    <div style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleComplete(item.id)}
      />
      {item.text}
    </div>
  );
};

export default TodoItem;
