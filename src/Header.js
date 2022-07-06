import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='top'>
        <div className='profile'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" alt="man face" />
        <p>Hey Roshan,<br/><strong>Good Morning !</strong></p>
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