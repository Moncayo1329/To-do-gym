import React from "react";
import TodoItem from './TodoItem';

function TodoList({ items, toggleComplete }){
return(
<div>
{items.map(item => (

<TodoItem key={item.id} item={item} toggleComplete={toggleComplete} />



))}


</div>
)



}


export default TodoList;
