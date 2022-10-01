import React, { useEffect, useState  } from 'react'
import { excerciseOptions, fetchData } from '../utils/fetchData'
import Icon from '../assets/icons/gym.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Excercises from './Excercises'
import './SearchExcercises.css'

function SearchExcercises() {
    const [search , setSearch] = useState("")
    const [excercises , setExcercises] = useState([])
    const [bodyParts , setBodyParts] = useState([])
    const [allExcercises , setAllExcercises] = useState([])
    

    useEffect(() => {
        const fetchExcercisesData = async () => {
           const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList' , excerciseOptions)
           setBodyParts(['all' , ...bodyPartsData])
           
           const allExcercises = await fetchData('https://exercisedb.p.rapidapi.com/exercises' , excerciseOptions)
           setAllExcercises(['all' , ...allExcercises])
        } 
        fetchExcercisesData()
    }, [])
    const handleSearch = async () => {
        if(search) {
            const excerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises' , excerciseOptions)
            const searchedExcercises = excerciseData.filter((excercise) =>
               excercise.name.toLowerCase().includes(search)
            || excercise.target.toLowerCase().includes(search)
            || excercise.equipment.toLowerCase().includes(search)
            || excercise.bodyPart.toLowerCase().includes(search)
            )
            setSearch('')
            setExcercises(searchedExcercises)
        }
    }
    const category = async (e) => {
        const excerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises' , excerciseOptions)
        const searchedExcercises = excerciseData.filter((excercise) =>
           excercise.name.toLowerCase().includes(e.target.textContent)
        || excercise.target.toLowerCase().includes(e.target.textContent)
        || excercise.equipment.toLowerCase().includes(e.target.textContent)
        || excercise.bodyPart.toLowerCase().includes(e.target.textContent)
        )
        setExcercises(searchedExcercises)
    }
    const slideLeft =() => {
        let slider = document.getElementById('slider')
        slider.scrollLeft -= 500
    }
    const slideRight =() => {
        let slider = document.getElementById('slider')
        slider.scrollLeft += 500
    }
  return (
    <div className='p-5 text-center'>
        <h2 className='h1' style={{fontWeight : "700"}}>Awesome Excercises You Should Know</h2>
        <div id='search' className='mx-auto p-5'>
            <input id='searchInput' className='form-control' style={{fontSize : "20px"}} type='text' placeholder='Search Excercises' value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
            <button id='searchButton' style={{width : "200px"}}  className='btn btn-danger btn-outline-dark text-light' onClick={handleSearch}>Search</button>
        </div>
        <div className='flex items-center' >
            <FontAwesomeIcon icon={faArrowLeft} onClick={slideLeft} />
            <div id='slider' className='d-flex overflow-x-scroll whitespace-nowrap scroll-smooth'>
                {bodyParts.map((bodyPart) => {
                        return (
                            <div className='m-5 p-5' style={{backgroundColor : "ghostwhite" , minWidth : "250px" }} >
                                <img src={Icon} alt='' style={{width : "50px" , margin : "auto"}} />
                                <div className='text-black-900 hover:text-red-500' style={{fontSize : "25px" , fontWeight : "700" , marginTop : "20px" , textTransform : "capitalize" , cursor : "pointer"}} onClick={(e) => category(e)} >{bodyPart}</div>
                            </div>
                        )
                    })}

            </div>
            <FontAwesomeIcon icon={faArrowRight} onClick={slideRight} />
        </div>
        <Excercises allExcercises={allExcercises} excercises={excercises} />
    </div>
  )
}

export default SearchExcercises