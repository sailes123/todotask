import Activities from './Activities';
import './App.css';
import Assignment from './Assignment';
import Field from './Field';
import Header from './Header';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import './Field.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Field autoPlace={"Add Topics..."} Myicon={ <><CalendarMonthIcon></CalendarMonthIcon>
         <AccessTimeFilledIcon></AccessTimeFilledIcon>
         <ExpandCircleDownOutlinedIcon></ExpandCircleDownOutlinedIcon></>} valueofButton={<><button type='text' className='.btn'>+ Add</button></>}/>
      <Assignment/>
      <Activities/>
    </div>
  );
}

export default App;
