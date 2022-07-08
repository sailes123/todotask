import React, { useState } from 'react';
import './Field.css';
// import { useState } from 'react';
// import ReadInput from './ReadInput';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Field = (props) => {
const [selectedDate,setSelectedDate] = useState(null);

  return (
    <div >
      <form className='field' >
        <div className="container">
        <input type="text" placeholder='Add Topics...'/>
        <DatePicker  
          selected={selectedDate}
          onChange={date=>setSelectedDate(date)}
  
          InputAdornmentProps={{}}
          customInput={<CalendarMonthIcon/>}
          >
          </DatePicker> 
          <p className='big-gap'></p> 
          <AccessTimeFilledIcon></AccessTimeFilledIcon>
          <p className='big-gap'></p>
          <select className='hello' >
               <option className='opt'>Assignment</option>
               <option className='opt'>Activities</option>
           </select>
          <p className='small-gap'></p>
        </div>
        <p className='small-gap'></p>
        <button type='submit' className='btn same-size'>+ Add</button>
      </form>
 
    </div>

  )
}

export default Field;