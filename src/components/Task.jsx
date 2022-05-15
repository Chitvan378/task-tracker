import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import React from 'react'
const Task = ({list, todelete}) => {
  const [over, setover] = useState(false);
  function hoverin(){
    setover(true);
  }
  function hoverout(){
    setover(false);
  }
  return (
    <div className='task-style'>
      <div>
        <h3>{list.text}</h3>
        <h4>{list.date}</h4>
      </div>
      <div>
        <FontAwesomeIcon icon={faXmark} onClick = {() =>todelete(list.id)} onMouseOver = {hoverin} onMouseOut = {hoverout} 
        style = {over && {color : 'red', cursor: 'pointer'}}/>
      </div>
    </div>
  )
}

export default Task;
