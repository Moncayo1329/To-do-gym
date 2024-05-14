import React, {useState} from 'react';
const days = [ 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

function TodoForm ({addItem}) {
    
   const [text, setText] = useState ('');
   const [day, setDay] = useState(days[0]);

  const handleSubmit = (e) => {
 e.preventDefault();
 addItem(text, day);
 setText('');
  };




    return(
<form onSubmit={handleSubmit}>
<input 
type='text'
value={text}
onChange={(e) => setText(e.target.value)}
placeholder='What day?'/>

<select value={day} onChange={(e) => setDay(e.target.value)}>
        {days.map(day => (
          <option key={day} value={day}>{day}</option>
        ))}
</select>
<button type="submit">Add</button>
</form>


    )



}


export default TodoForm