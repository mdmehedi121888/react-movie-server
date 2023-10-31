import React from 'react';

const SingleCard = (props) => {
    
    const{movieName,watchTime,description,poster,category,imdbRating}=props.data;
    const handleBookNow = props.handleBookNow;
    return (
        <div className='text-center'>
            <div className="card card-compact bg-base-100 shadow-2xl">
  <figure className='w-full h-96'><img src={poster?poster:""} /></figure>
  <div className="card-body text-center grid grid-cols-1">
    <h2 className=" text-3xl font-bold text-center w-[100%] my-5">{movieName}</h2>
    <p className='text-xl'>{description}</p>
    <div><p className='text-2xl font-bold'>{category}</p></div>
    <div className='text-2xl flex font-bold justify-evenly border-2 my-5'>
        <div>WatchTime: <span>{watchTime}</span></div>
        <div>Rating: <span>{imdbRating}</span></div>
    </div>
      <button onClick={()=>handleBookNow(watchTime)} className="btn btn-primary mb-6">Book Now</button>
  </div>
</div>
        </div>
    );
};

export default SingleCard;