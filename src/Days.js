import React from 'react';

function DaySelector({ selectedDay, setSelectedDay }){
const days = ['Thuesday', 'Wednesday', 'Thursday' ,'Friday'];



return(
    <>
    <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>

{days.map(day => (
    <option key={day} value={day}>{day}</option>
  ))}


    </select>
    
    
    </>

);



};


export default DaySelector;