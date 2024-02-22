import './SectionThree.css'
import card1 from '../assets/Chicken Fry.png'
import card2 from '../assets/double burger.png'
import card3 from '../assets/chinis spag.png'
import card4 from '../assets/Bangladeshi chicken.png'
import card5 from '../assets/bangladeshi.png'
import card6 from '../assets/Full chicken.png'
import Image from 'next/image'
import { FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiBasketLight } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";

const SectionThree = () => {
  return (
    <div className='sectionThree'>
      <h2> Popular dishes </h2>  

    <div className='sectionThreeBtns'>
        <button id='all'> ALL CATEGORIES </button>

        <button> PIZZA </button>

        <button> BURGER </button>

        <button> ICECREAM </button> 

        <button> CHICKEN CHIPS </button> 
        
        <button> BLUEBERRY SHAKE </button> 

        <button> DRINK </button>  
    </div>

    <div className='sectionThreeCards'>

      <div className='sectionThreeCardDiv'>

      <div className='topIcon'>
       <button id='cartt'> < PiBasketLight />   </button>

       <button id='heartt'> <CiHeart/>   </button>

       <button id='eyee'>  < FaRegEye />   </button>
      </div>

        <Image
         src = {card1}
         width = {200}
         height = {100}
         alt = ''
        />
         
         <div>
           <p> PIZZA <FaRegStar style={{color : 'orange'}}/>  
           <FaRegStar style={{color : 'orange'}}/> 
           <FaRegStar style={{color : 'orange'}}/> </p>
           <h2> UNLIMITED CHICKEN FRY</h2>
           <p> PRICE - $40.00 $70.00</p>
         </div>

      </div>  

      
      <div className='sectionThreeCardDiv'>
        <Image
         src = {card2}
         width = {200}
         height = {100}
         alt = ''
        />
         
         <div>
           <p> PIZZA <FaRegStar style={{color : 'orange'}}/>  
           <FaRegStar style={{color : 'orange'}}/> 
           <FaRegStar style={{color : 'orange'}}/> </p>
           <h2> UNLIMITED CHICKEN FRY</h2>
           <p> PRICE - $40.00 $70.00</p>
         </div>

      </div>  

      
      <div className='sectionThreeCardDiv'>
        <Image
         src = {card3}
         width = {200}
         height = {160}
         alt = ''
        />
         
         <div>
           <p> PIZZA <FaRegStar style={{color : 'orange'}}/>  
           <FaRegStar style={{color : 'orange'}}/> 
           <FaRegStar style={{color : 'orange'}}/> </p>
           <h2> UNLIMITED CHICKEN FRY</h2>
           <p> PRICE - $40.00 $70.00</p>
         </div>

      </div>  

      
      <div className='sectionThreeCardDiv'>
        <Image
         src = {card4}
         width = {200}
         height = {160}
         alt = ''
        />
         
         <div>
           <p> PIZZA <FaRegStar style={{color : 'orange'}}/>  
           <FaRegStar style={{color : 'orange'}}/> 
           <FaRegStar style={{color : 'orange'}}/> </p>
           <h2> UNLIMITED CHICKEN FRY</h2>
           <p> PRICE - $40.00 $70.00</p>
         </div>

      </div>  

      
      <div className='sectionThreeCardDiv'>
        <Image
         src = {card5}
         width = {200}
         height = {160}
         alt = ''
        />
         
         <div>
           <p> PIZZA <FaRegStar style={{color : 'orange'}}/>  
           <FaRegStar style={{color : 'orange'}}/> 
           <FaRegStar style={{color : 'orange'}}/> </p>
           <h2> UNLIMITED CHICKEN FRY</h2>
           <p> PRICE - $40.00 $70.00</p>
         </div>

      </div>  

      
      <div className='sectionThreeCardDiv'>
        <Image
         src = {card6}
         width = {200}
         height = {160}
         alt = ''
        />
         
         <div>
           <p> PIZZA <FaRegStar style={{color : 'orange'}}/>  
           <FaRegStar style={{color : 'orange'}}/> 
           <FaRegStar style={{color : 'orange'}}/> </p>
           <h2> UNLIMITED CHICKEN FRY</h2>
           <p> PRICE - $40.00 $70.00</p>
         </div>

      </div>  


    </div>



    </div>
  )
}

export default SectionThree