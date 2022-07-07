import React from 'react';
import ReadInput from './ReadInput';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const Assignment = (props) => {
  return (
    <div className='assignment'>
        <h1>Assignment</h1>
        <ReadInput Avalue={props.Avalue} Myicon={ <><ExpandCircleDownOutlinedIcon></ExpandCircleDownOutlinedIcon></>} valueofButton={<><CheckCircleOutlinedIcon></CheckCircleOutlinedIcon>
        <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></>}/>
    </div>
  )
}

export default Assignment