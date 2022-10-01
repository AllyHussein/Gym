import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
const SimilarExcercises = ({targetMuscleData}) => {
    // let randomx = Math.floor((Math.random() * 10))
    // let randomy = Math.floor((Math.random() * 10) + randomx)
    const slideLeft =() => {
      let slider = document.getElementById('similarSilder')
      slider.scrollLeft -= 500
  }
  const slideRight =() => {
      let slider = document.getElementById('similarSilder')
      slider.scrollLeft += 500
  }
  return (
    <>
    {/* <div>
        <h1 className='h1 p-4 text-left'>Similar Excercises For The Same Target Muscle : </h1>
          <div style={{display : "flex" ,padding : "25px" ,maxWidth : "100%", flexWrap : "wrap" , justifyContent : "space-around"}}>
              {targetMuscleData.slice(randomx , randomy).map((excercise) => (
                <>
                <div style={{minWidth : "350px" ,padding : "15px", minHeight : "250px", maxWidth : "40%", marginRight : "10px" ,borderTop : "3px solid red", marginBottom : "10px" , textAlign : "center"}}> 
                <Link to={`/excercise/${excercise.id}`}><img style={{margin : "auto"}} src={excercise.gifUrl} alt={excercise.name} loading='lazy' /></Link>
                <button className='p-2 ms-2 mt-4' style={{textTransform : "capitalize" , backgroundColor : "#ffa9a9" , color : "#FFF" , borderRadius : "20px"}}>{excercise.bodyPart}</button>
                <button className='p-2 ms-2 mt-4' style={{textTransform : "capitalize" , backgroundColor : "#fcc757" , color : "#FFF" , borderRadius : "20px"}}>{excercise.target}</button>
                <Link to={`/excercise/${excercise.id}`}><p className='h3 mt-4' style={{ textTransform : "capitalize" ,fontWeight : "700" , maxWidth : "365px"}} >{excercise.name}</p> </Link>
                </div>
                </>
              ))}
          </div>
    </div> */}
    <div>
        <h1 className='h1 p-4 text-left'>Similar Excercises For The Same Target Muscle : </h1>
        <div className='flex items-center'>
          <FontAwesomeIcon icon={faArrowLeft} onClick={slideLeft} style={{fontSize : "25px" , margin : "0 15px"}} />
          <div id='similarSilder' className='d-flex overflow-x-scroll scroll-smooth'>
              {targetMuscleData.map((excercise) => (
                <>
                <div style={{minWidth : "350px" , minHeight : "250px", maxWidth : "40%", marginRight : "25px" ,borderTop : "3px solid red", marginBottom : "10px" , textAlign : "center"}}> 
                <Link to={`/excercise/${excercise.id}`}><img style={{margin : "auto"}} src={excercise.gifUrl} alt={excercise.name} loading='lazy' /></Link>
                <button className='p-2 ms-2 mt-4' style={{textTransform : "capitalize" , backgroundColor : "#ffa9a9" , color : "#FFF" , borderRadius : "20px"}}>{excercise.bodyPart}</button>
                <button className='p-2 ms-2 mt-4' style={{textTransform : "capitalize" , backgroundColor : "#fcc757" , color : "#FFF" , borderRadius : "20px"}}>{excercise.target}</button>
                <Link to={`/excercise/${excercise.id}`}><p className='h3 mt-4' style={{ textTransform : "capitalize" ,fontWeight : "700" , maxWidth : "365px"}} >{excercise.name}</p> </Link>
                </div>
                </>
              ))}
          </div>
          <FontAwesomeIcon icon={faArrowRight} onClick={slideRight} style={{fontSize : "25px" , margin : "0 15px"}} />
        </div>
    </div>
    </>
  )
}

export default SimilarExcercises