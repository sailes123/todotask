import React from 'react';
import './Header.css';

const Header = () => {
  let time = new Date().getHours(); 


   if(time>=5 && time<12){
    var greeting = "Morning !";
   }
   else if (time>=12 && time<15) {
    var greeting = "Afternoon ! ";
   } else if(time>=15 && time < 18){
    var greeting = "Evening !";
   }
   else{
   var greeting = "Night !";
   }

  return (
 

    <div className='top'>
        <div className='profile'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" alt="man face" />
        <p>Hey Roshan,<br/><strong>Good {greeting} </strong></p>
        </div>
        <div className='burger'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </div>   
    </div>
  )
}

export default Header;