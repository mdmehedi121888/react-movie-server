import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import url from '../../Data/data.json';
const Card = (props) => {
    const [cards,setCard] = useState([]);
    
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => {
            setCard(data);
            console.log(cards);
        });
    },[])
    const handleBookNow = props.handleBookNow;

    return (
        <div className=''>
            {
                cards.map((data,index) => <SingleCard data={data} key={index}handleBookNow={handleBookNow}></SingleCard>)
            }
        </div>
    );
};

export default Card;