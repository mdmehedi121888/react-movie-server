import React, { useState } from 'react';
import Card from './Card/Card';
import Calculate from './Calculate/Calculate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    const [time,setTime] = useState(0);
    const handleBookNow = (watchTime)=>{
        let previousTime = JSON.parse(localStorage.getItem('time'));
         let currentTime = watchTime;
        if(previousTime)currentTime+=previousTime;
        setTime(currentTime);
        localStorage.setItem('time',currentTime);

        toast('🦄 Successfully added!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        
    }
    return ( 
        <div className='flex gap-5 mt-5 realative'>
            <div className='w-[60%]'><Card handleBookNow={handleBookNow}></Card></div>
            <div className='w-[30%] mt-42 text-center mx-auto '> <Calculate time={time}></Calculate></div>
           
        </div>
    );
};

export default Main;