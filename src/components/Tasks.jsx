import React from 'react'
import Task from './Task';
const Tasks = ({todos, deletetask}) => {
  return (
    <div>
      {todos.map((elem) => <Task list = {elem} todelete = {deletetask}/>)}
    </div>
  )
}

export default Tasks;
