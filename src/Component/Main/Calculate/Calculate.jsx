import React from 'react';
import Swal from 'sweetalert2'

const Calculate = ({time}) => {
   const prviousSessionTime = localStorage.getItem('time');
   const completeBtn = ()=>{
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
   }
    return (
       <div className='fixed'>
         <div className=''>
            <h1 className='text-3xl font-bold mt-5'>My Cart</h1>
            <h1 className='text-xl font-bold my-5'>Total Watch Time</h1>
            <div className='w-[100%] mx-auto'>
            <h1 className='border-4  text-xl my-5'><span>{time?time:prviousSessionTime?prviousSessionTime:0}</span></h1>
            <button className='btn btn-secondary my-5' onClick={completeBtn}>Complete</button>
            </div>
        </div>
       </div>
    );
};

export default Calculate;