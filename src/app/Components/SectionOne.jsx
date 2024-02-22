import React from 'react'
import './Sectionone.css'
import FlyingBurger from '../assets/Flying burger.png'
import Image from 'next/image'
import { IoIosSearch } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { FaCocktail } from "react-icons/fa";

const SectionOne = () => {
  return (
    <div className='sectionOne'>
     <div className='sectionOneBack'>
        <div classname = 'textDiv'>

          <h2> ENJOY OUR
            <span style={{color: '#ff8e28'}}> DELICIOUS</span>
             <span style={{color: '#00a850'}}> FOOD </span> 
             </h2>
          <p> Hey,our delicious food is waiting for you Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <div className='inputDiv'>
           <input type = 'text' placeholder='Type your location'/>
           <button> <IoIosSearch/> Search</button>
          </div>

          <div className='iconDiv'>
            <span>  <FaFacebookSquare/> </span>
            <span> < FaYoutube/> </span>
            <span> < FaTwitter/> </span>
          </div>

        </div> 
        
        <div className='imageDiv'>
            <Image src={FlyingBurger} 
              alt = ''
              height ={600}
              width = {500}
            />
        </div>


     </div>   

     <div className='optionsDiv'>
        <p>
            <FaHamburger/>
            <span> DRINKS</span>
        </p>

        <p>
            <FaCocktail/>
            <span> STUCKS </span>
        </p>

        <p>
            <span> BURGER </span>
        </p>

        <p>
            <span> DRINKS </span>
        </p>

         <p>
            <span> CHICKEN </span>
         </p>

         <p>
            <span> COMBO </span>
         </p>

         <p>
            <span> PIZZA </span>
         </p>

         <p>
            <span> COMBO </span>
         </p>




     </div>
    </div>
  )
}

export default SectionOne