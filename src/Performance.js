import React from 'react';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import LineChart from './LineChart';

const Performance = () => {
  return (
    <div>
        <h1>Performance</h1>
        <div className="field">
            <div className="container">
            <p className='fixedwidth left'>Weekly.....</p>
            <ExpandCircleDownOutlinedIcon></ExpandCircleDownOutlinedIcon>
            </div>
        </div>
        <div className="completed">
            <h2>Completed</h2>
            <LineChart/>
        </div>
        <div className="missed">
            <h2>Missed</h2>
        </div>
        <div className="missed">
            <h2>Overall</h2>
        </div>
        
    </div>
  )
}

export default Performance