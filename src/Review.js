import React, { useState } from 'react' ;
import people from './Data' ;
import './Review.css'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
 import { FaQuoteRight } from "react-icons/fa";


const Review = () => {
    const [index,setIndex] = useState(0);
    const {name,job,image,text} = people[index];

    const checkNumber = (number) => {
        if (number > people.length -1 ) {
            return 0
        }
        if (number < 0) {
            return people.length -1
        }
        return number;
    }


    const nextPerson = () =>{
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const prevPerson = () =>{
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }


    return <article className='review'>
        <div className='img-container'>
            <img src={image} alt={name} className='person-img'/>
            <span className='quote-icon'>
            <FaQuoteRight className='right' />
            </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
            <button className='prev-btn' onClick={prevPerson}> 
                <FaAngleLeft />
            </button>
            <button className='next-btn' onClick={nextPerson}> 
                <FaAngleRight />
            </button>
        </div>
        <button className='random-btn'>suprise me</button>
    </article>;
};

export default Review;


