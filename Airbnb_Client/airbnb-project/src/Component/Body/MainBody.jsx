/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {FaHeart,FaStar } from 'react-icons/fa';
import {NavLink } from "react-router-dom"

const MainBody = ({result}) => {
    return (
        <div> 
            <Carousel>
                <div >
                <NavLink to="/">  <FaHeart className='absolute left-64 top-4 text-xl'> </FaHeart> 
                </NavLink>
                <img className='rounded-lg w-32 h-72' src={result.cover_pic1} alt="" />
                   
                </div>
                <div>
                <NavLink to="/">  <FaHeart className='absolute left-64 top-4 text-xl'> </FaHeart> 
                </NavLink>
                <img className='rounded-lg w-32 h-72' src={result.cover_pic2} alt="" />
                  
                </div>
                <div>
                <NavLink to="/">  <FaHeart className='absolute left-64 top-4 text-xl'> </FaHeart> 
                </NavLink>
                <img className='rounded-lg w-32 h-72' src={result.cover_pic3} alt="" />
                   
                </div>
                <div>
                <NavLink to="/">  <FaHeart className='absolute left-64 top-4 text-xl'> </FaHeart> 
                </NavLink>
                <img className='rounded-lg w-32 h-72' src={result.cover_pic4} alt="" />
                   
                </div>
            </Carousel>
          <div className='flex justify-between mt-2'>
          <p className="text-black font-semibold text-base"> {result.location} </p>
          <p className='flex'> 
             <span className='mt-1 pr-1'> <FaStar > </FaStar></span> {result.rating ? result.rating : "No reviews yet" }
         </p>
          </div>
           <p className="text-base text-gray-500"> {result.stay ? result.stay : ""} </p>
           <p className="text-base text-gray-500"> {result.date ? result.date : "" } </p>
           <p className="text-base text-black font-semibold "> ${result.price}
           <span className='font-normal'> night </span> </p>
           
        </div>
    );
};

export default MainBody;