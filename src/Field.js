import React from 'react';
import './Field.css';


const Field = (props) => {
  return (
    <div className='field'>
        <div className="container">
        <input type="text" placeholder={props.autoPlace} value={props.Avalue}/>
         {props.Myicon}
        </div>
         {props.valueofButton}
    </div>

  )
}

export default Field