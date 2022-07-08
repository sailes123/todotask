import React from 'react';
import './Field.css';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const ReadInput = (props) => {
  return (
    <div>
        <div className='field'>
        <div className="container space">
        <p>{props.Avalue}</p>
       
        <ExpandCircleDownOutlinedIcon></ExpandCircleDownOutlinedIcon>
        </div>
         <p className='small-gap'></p>
        <div className='same-size make-flex'>
        <button type='text' >
        <CheckCircleOutlinedIcon></CheckCircleOutlinedIcon>
        </button>
        <button type='text'>
        <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
        </button> 
        </div>


        
        
    </div>
    </div>
  )
}

export default ReadInput