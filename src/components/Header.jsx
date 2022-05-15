import React from 'react'
import Button from './Button';
const Header = ({changeState, current}) => {
  return (
    <div className='header'>
        <h1 style={{textAlign:'center'}}>Task tracker</h1>
        <Button onClick={changeState} present = {current}/>
    </div>
  )
}
export default Header;