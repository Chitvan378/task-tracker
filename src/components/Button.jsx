import React from 'react'
const Button = ({onClick, present}) => {
  return (
    <div>
        {present ? 
         <button className='close-button' onClick={onClick}>Close</button>: <button className='add-button' onClick={onClick}>Add</button> }
    </div>
  )
}
export default Button;