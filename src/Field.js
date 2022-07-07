import React from 'react';
import './Field.css';
// import { useState } from 'react';
// import ReadInput from './ReadInput';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Field = (props) => {
  return (
    <div >
      <form className='field' >
        <div className="container">
        <input type="text" placeholder='Add Topics...'/>
          <CalendarMonthIcon></CalendarMonthIcon>
          <AccessTimeFilledIcon></AccessTimeFilledIcon> 
          <ExpandCircleDownOutlinedIcon ></ExpandCircleDownOutlinedIcon>
        </div>
        <button type='submit' className='btn' >+ Add</button>
      </form>
 
    </div>

  )
}

export default Field