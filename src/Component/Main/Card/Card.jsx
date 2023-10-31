import React, { useEffect, useState } from 'react';
// import url from '../../../../public/data.json';
import SingleCard from '../SingleCard/SingleCard';
const Card = (props) => {
    const [cards,setCard] = useState([]);
    useEffect(()=>{
        fetch('../../../../public/data.json')
        .then(res => res.json())
        .then(data => setCard(data));
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