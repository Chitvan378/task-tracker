import React from 'react';
import Header  from './Header';
import InputForm from './InputForm';
import { useState } from 'react';
import Tasks from './Tasks'; 
export default function App(){
  let [task, newtask] = useState([])
    function Addtask(obj){
      newtask([...task, obj]);
    }
    function deletetask(id){
      newtask (task.filter((elem) => {
        return id !== elem.id;
      } ))
    }
  const [form, Addform] = useState(false);
  
  return (
    <div className='container'>
      <Header changeState ={() => Addform(!form)} current = {form}/>
      <InputForm showForm = {form} add = {Addtask}/>
      <Tasks todos = {task} deletetask = {deletetask}/>
    </div>
  );
}

