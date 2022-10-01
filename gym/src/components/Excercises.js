import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '@mui/material/Pagination'

function Excercises({excercises, allExcercises}) {
  const [currentPage , setCurrentPage] = useState(1)
  const excercisesPerPage = 10
  const lastExcerciseIndex = currentPage * excercisesPerPage
  const firsttExcerciseIndex = lastExcerciseIndex - excercisesPerPage
  const currentExcercises = excercises.slice(firsttExcerciseIndex, lastExcerciseIndex)
  const currentAllExcercises = allExcercises.slice(firsttExcerciseIndex, lastExcerciseIndex)

  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({top : 1800 , behavior : "smooth"})
  }
  return (
    <>
    {currentExcercises.length !== 0 ? <div>
      <h1 className='h1 p-4 text-left'>Showing Results : </h1>
      <div style={{display : "flex" , maxWidth : "100%", flexWrap : "wrap" , justifyContent : "space-around"}}>
          {currentExcercises.map((excercise) => (
            <>
            <div style={{minWidth : "350px" , minHeight : "250px", maxWidth : "40%", marginRight : "10px" ,borderTop : "3px solid red", marginBottom : "10px" , textAlign : "center"}}> 
            <Link to={`/excercise/${excercise.id}`}><img style={{margin : "auto"}} src={excercise.gifUrl} alt={excercise.name} loading='lazy' /></Link>
            <button className='p-2 ms-2 mt-4' style={{textTransform : "capitalize" , backgroundColor : "#ffa9a9" , color : "#FFF" , borderRadius : "20px"}}>{excercise.bodyPart}</button>
            <button className='p-2 ms-2 mt-4' style={{textTransform : "capitalize" , backgroundColor : "#fcc757" , color : "#FFF" , borderRadius : "20px"}}>{excercise.target}</button>
            <Link to={`/excercise/${excercise.id}`}><p className='h3 mt-4' style={{ textTransform : "capitalize" ,fontWeight : "700" , maxWidth : "365px"}} >{excercise.name}</p> </Link>
            </div>
            </>
          ))}
      </div>
      <div className='d-flex justify-content-center align-items-center mt-5'>
          {excercises.length > excercisesPerPage && (
                  <Pagination
                  color='standard'
                  shape='rounded'
                  defaultPage={1}
                  count={Math.ceil(excercises.length / excercisesPerPage)}
                  page={currentPage}
                  onChange={paginate}
                  size='large'
                   />
                )}
      </div>
      
    </div> : <div>
      <h1 className='h1 p-4 text-left'>Browse Excercises : </h1>
      <div style={{display : "flex" , maxWidth : "100%", flexWrap : "wrap" , justifyContent : "space-around"}}>
          {currentAllExcercises.slice(1).map((excercise) => (
            <>
            <div style={{minWidth : "350px" , minHeight : "250px", maxWidth : "40%", marginRight : "10px" ,borderTop : "3px solid red", marginBottom : "10px" , textAlign : "center"}}> 
            <Link to={`/excercise/${excercise.id}`}><img style={{margin : "auto"}} src={excercise.gifUrl} alt={excercise.name} loading='lazy' /></Link>
            <button className='p-2 ms-2 mt-4' style={{textTransform : "capitalize" , backgroundColor : "#ffa9a9" , color : "#FFF" , borderRadius : "20px"}}>{excercise.bodyPart}</button>
            <button className='p-2 ms-2 mt-4' style={{textTransform : "capitalize" , backgroundColor : "#fcc757" , color : "#FFF" , borderRadius : "20px"}}>{excercise.target}</button>
            <Link to={`/excercise/${excercise.id}`}><p className='h3 mt-4' style={{ textTransform : "capitalize" ,fontWeight : "700" , maxWidth : "365px"}} >{excercise.name}</p> </Link>
            </div>
            </>
          ))}
      </div>
      <div className='d-flex justify-content-center align-items-center mt-5'>
          {allExcercises.length > excercisesPerPage && (
                  <Pagination
                  color='standard'
                  shape='rounded'
                  defaultPage={1}
                  count={Math.ceil(allExcercises.length / excercisesPerPage)}
                  page={currentPage}
                  onChange={paginate}
                  size='large'
                   />
                )}
      </div>
      
    </div> 
     }
    
    </>
    

    
  )
}

export default Excercises