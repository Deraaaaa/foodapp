'use client'

import './Navbar.css'
import Image from 'next/image'
import Logo from '../assets/logo.png'
import Cart1image from '../assets/Cart 1.jpg'
import Cart2image from '../assets/Cart 2.jpg'
import Cart3image from '../assets/Cart 3.jpg'
import Cart4image from '../assets/cart 3.jpg'
import React, {useState} from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {

    const [show, setShow] = useState(false)

    const hideFunc = () =>{
        setShow(false);
    }

    const showFunc = () =>{
        setShow(true);
    }


  return (
    <div className='mainDiv'>
        <nav className='genDiv'>
            <div>
                <Image 
                    src={Logo}
                    alt='logo'
                    width={140}
                    height={30}
                />
            </div>

            <div className='secondDiv'>
                <p>Home</p>
                <p>About</p>
                <p>Pages</p>
                <p>Shop</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>

            <div className='thirdDiv'>
                <div className='cartNumber' onClick={showFunc}>
                    <p><FaShoppingBasket/></p>
                    <span>0</span>
                </div>
                    <p>< MdFavoriteBorder  /></p>
            </div>
        </nav>


        {show === true && (
            <div className='sideBarModal'>
                
                <div className='sideBar'>

                    <div className='closeSideBar'>
                        <p onClick={hideFunc}><IoMdClose /></p>
                        <h2>CART ITEMS - 4</h2>
                    </div>

                    <div className='allcarts'>
                     
                         <div className='cartimg1'>
                           <Image
                           src={Cart1image}
                           id='img1'
                           alt='food'
                           width={50}
                           height={50}
            
                        />
           <div>
               <p>Rorem ipsum dolor sit amet.</p>
               <p id='p1'>$19.00</p>
               <span id='firstcl'> <p onClick={hideFunc}><MdOutlineCancel/></p></span>
           </div>
       </div>

       <div className='cartimg2'>
           <Image
            src={Cart2image}
            id='img2'
            alt='food'
            width={50}
            height={50}
           
           />
           <div>
               <p>Rorem ipsum dolor sit amet</p>
               <p id='p2'>$22.00</p>
           </div>
       </div>

       <div className='cartimg3'>
           <Image
            src={Cart3image}
            id='img3'
            alt='food'
            width={50}
            height={50}
           />
           <div>
               <p>Rorem ipsum dolor sit amet.</p>
               <p id='p3'>$43.00</p>
           </div>

       </div>
       <div className='cartimg4'>
           <Image
            src={Cart4image}
            id='img4'
            alt='food'
            width={50}
            height={50}
           />
           <div>
               <p>Rorem ipsum dolor sit amet.</p>
               <p id='p4'>$14.00</p>
           </div>
       </div>
    
       <hr></hr>
              <div className='subtotal'>
                <div>
                    <p>SUB TOTAL</p>
                </div>

                <div>
                <p>SUB TOTAL= $87.00</p>
                </div>

              </div>

       <div className='buttons'>
          < button className='btn1'>
            View cart
            </button>
             </div>

       <div>
        <button className='btn2'>
            Check Out
        </button>
       </div>
       </div>



                        
                    </div>
                    
                </div>

            
        ) }

    </div>
  )
}

export default Navbar
