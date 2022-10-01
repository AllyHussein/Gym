import React from 'react'
import './Hero.css'
import HeroImage from '../assets/images/banner.png'
function Hero() {
  return (
    <div className='d-flex justify-content-between align-items-center p-5'>
        <div >
            <p style={{fontWeight : "600" , fontSize : "45px"}} className='text-danger'>Fitness Club</p>
            <p id='herop' style={{fontWeight : "700"}}>Sweat , Smile <br/> and Repeat</p>
            <p style={{fontSize : "35px"}}>Check out the most effective excercises</p>
        </div>
        <img className='heroimg' src={HeroImage} alt='' style={{width : "50%"}} />
    </div>
  )
}

export default Hero