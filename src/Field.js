import React from 'react';
import './Field.css';
import { useState } from 'react';
import ReadInput from './ReadInput';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Field = (props) => {
const [Avalue,setAvalue] = useState('');
const [selectedDate,setSelectedDate] = useState(null);

let AddField = (e) =>{
  e.preventDefault();
  <ReadInput Avalue={Avalue}/>
}

function dateSelector(){
      
}


 <DatePicker selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        >
          
        </DatePicker> 
  return (
    <div >
      <form className='field' onSubmit={AddField}>
        <div className="container">
        <input type="text" placeholder='Add Topics...' onChange={e=> setAvalue(e.target.value)}/>
        <DatePicker ></DatePicker>
        <button onClick={dateSelector}>
          <CalendarMonthIcon></CalendarMonthIcon>
          <select >
            <option></option>
               <option value="Assignment">First</option>
               <option value="Activities">Second</option>
               <option value="third">Third</option>
           </select>
         
         
        
       </button>
         
        </div>
        <button type='submit' className='btn' >+ Add</button>
      </form>
 
    </div>

  )
}

export default Field