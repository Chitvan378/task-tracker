import React from 'react';
import {useState} from 'react';
const InputForm = ({showForm, add}) => {
    const [text, settext] = useState("");
    const [date, setdate] = useState("");
    const [id, setId] = useState(1);
    const submitChange = (event) => {
        event.preventDefault();
        if(!text){
            alert("Please enter some task")
        }
        else{
            setId(id+1)
            add({id, text, date})
        }
        settext("");
        setdate("");
    }
  return (  showForm ?
    <div className='form'>
        <form action="" onSubmit={submitChange}>
            <table cellSpacing={10}>
                <tbody>
                <tr>
                    <td><label htmlFor="task">Task</label></td>
                    <td><input type="text" value= {text} onChange={(e) =>settext(e.target.value)}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="Date" >Date</label></td>
                    <td><input type="date" value= {date} onChange={(e) =>setdate(e.target.value)}/><br /></td>
                </tr>
                </tbody>
            </table>   
            <div style={{width: '100%', display:"flex", alignItems:'center', margin: '10px 0'}}>
            </div>
            <button className='onsubmit' type='submit'>Submit</button>
        </form>
    </div> : ""
  )
}

export default InputForm;