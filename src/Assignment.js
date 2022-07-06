import React from 'react';
import Field from './Field';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const Assignment = () => {
  return (
    <div className='assignment'>
        <h1>Assignment</h1>
        <Field Avalue={'Lorem ipsum dolor sit amet consecttur adipis'} Myicon={ <><ExpandCircleDownOutlinedIcon></ExpandCircleDownOutlinedIcon></>} valueofButton={<><CheckCircleOutlinedIcon></CheckCircleOutlinedIcon>
        <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></>}/>
        <Field Avalue={'Lorem ipsum dolor sit amet consecttur adipis'} Myicon={ <><ExpandCircleDownOutlinedIcon></ExpandCircleDownOutlinedIcon></>} valueofButton={<><CheckCircleOutlinedIcon></CheckCircleOutlinedIcon>
        <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></>}/>
        <Field Avalue={'Lorem ipsum dolor sit amet consecttur adipis'} Myicon={ <><ExpandCircleDownOutlinedIcon></ExpandCircleDownOutlinedIcon></>} valueofButton={<><CheckCircleOutlinedIcon></CheckCircleOutlinedIcon>
        <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></>}/>
        <Field Avalue={'Lorem ipsum dolor sit amet consecttur adipis'} Myicon={ <><ExpandCircleDownOutlinedIcon></ExpandCircleDownOutlinedIcon></>} valueofButton={<><CheckCircleOutlinedIcon></CheckCircleOutlinedIcon>
        <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></>}/>
    </div>
  )
}

export default Assignment