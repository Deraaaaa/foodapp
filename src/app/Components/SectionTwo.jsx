import React from 'react'
import Image from 'next/image'
import './Sectiontwo.css'
import mapImage from '../assets/Map like image.png'
import { FaBowlFood } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { MdDomain } from "react-icons/md";
import { GrServices } from "react-icons/gr";


const SectionTwo = () => {
    return (
      <div className='sectionTwo'>
  
          <div className='sectionTwoLeft'>
              <Image 
                  src={mapImage}
                  width={500}
                  height={500}
                  alt=''
              />
          </div>
  
  
          <div className='sectionTwoRight'>
              <h4>why choose us</h4>
              <h2>WHY WE ARE THE BEST ?</h2>
              <p>
                  Rrem ipsum dolor sit amet, consectetur 
                  adipisicing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation 
                  ullamco laboris nisquiey.
              </p>
              <p>
                  Rrem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore 
                  magna aliqua.
              </p>
  
              <div className='iconDivs'>
                  <div>
                      <FaBowlFood className='sectionTwoIcons'/>
                      <span>Fresh food</span>
                  </div>
  
                  <div>
                      <FaTruckFast className='sectionTwoIcons'/>
                      <span>Fast Delivery</span>
                  </div>
  
                  <div>
                      <MdDomain className='sectionTwoIcons'/>
                      <span>Quality Maintain</span>
                  </div>
  
                  <div>
                      <GrServices className='sectionTwoIcons'/>
                      <span>24/7 Service</span>
                  </div>
              </div>
          </div>
  
  
      </div>
    )
  }
  
  export default SectionTwo
  