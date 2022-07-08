import React from 'react';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import LineChart from './LineChart';
import PieChart from './PieChart';
import './Edit.css';

const Performance = () => {
  return (
    <div>
        <h1>Performance</h1>
        <div className="field">
            <select className='container space' >
               <option className='opt'>Weekly....</option>
               <option className='opt'>Monthly....</option>
               <option className='opt'>Yearly....</option>
           </select>
        </div>
        <div className="completed">
            <h2>Completed</h2>
            <LineChart/>
        </div>
        <div className="missed">
            <h2>Missed</h2>
            <LineChart/>
        </div>
        <div className="missed">
            <h2>Overall</h2>
            <div className="partition">
                <div className="leftPart">
                 <PieChart/>   
                </div>  
                <div className="numbering">
                    <div className="squarebox blue"></div>
                    <strong> Completed - 42/62</strong>
                    <br/>
                    <div className="squarebox red"></div>
                    <strong> Completed - 20/62</strong>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Performance