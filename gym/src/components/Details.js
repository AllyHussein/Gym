import React from 'react'
import bodyPartImage from '../assets/icons/body-part.png'
import targetImage from '../assets/icons/target.png'
import equipmentImage from '../assets/icons/equipment.png'
import "./Details.css"
const Details = ({excerciseDetail}) => {
    const { bodyPart , gifUrl , name , target , equipment } = excerciseDetail
    const extraDetails = [
        {
            icon : bodyPartImage,
            name : bodyPart
        },
        {
            icon : targetImage,
            name : target
        },
        {
            icon : equipmentImage,
            name : equipment
        }
    ]
  return (
    <div id='detailsContainer' className='p-4'>
        <div id='detailsDiv'>
            <h1 className='h1 text-danger' style={{fontWeight : "bolder"}}>{name}</h1>
            <p id='detailsP' style={{fontSize : "24px"}} >Excercises keep you strong, <strong>{name}</strong>  is one of the best excercises to target your 
            <strong> {target} </strong>  
            it will help you improve your mood and gain energy
            </p>
            {extraDetails.map((item) => (
                <div key={item.name} className='d-flex  align-items-center p-3'>
                    <img  style={{width : "100px" , height : "100px" , backgroundColor : "#fff2db" , borderRadius : "50%" , padding : "15px"}} src={item.icon} alt='' />
                    <span className='h4 ms-5' style={{fontWeight : "bold" , textTransform : "capitalize"}}>{item.name}</span>
                </div>
            ))}

        </div>
        <img id='detailsImg' src={gifUrl} alt={name} loading='lazy'  />
    </div>
  )
}

export default Details