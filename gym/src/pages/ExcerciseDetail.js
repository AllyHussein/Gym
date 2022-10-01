import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Details from '../components/Details'
import ExcerciseVideos from '../components/ExcerciseVideos'
import SimilarExcercises from '../components/SimilarExcercises'
import {fetchData , excerciseOptions, youtubeOptions} from '../utils/fetchData'  
function ExcerciseDetail() {
  const [excerciseDetail, setExcerciseDetail] = useState({})
  const [excerciseVideos , setExcerciseVideos] = useState([])
  const [targetMuscleData , setTargetMuscleData] = useState([])
  // const [equipmentData , setEquipmentData] = useState([])
  const {id} = useParams()
  useEffect(() => {
    const fetchExcerciseData = async() => { 
      const excerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      const excerciseDetailData = await fetchData(`${excerciseDbUrl}/exercises/exercise/${id}` , excerciseOptions)
      setExcerciseDetail(excerciseDetailData)
      const excerciseVideoData = await fetchData (`${youtubeSearchUrl}/search?query=${excerciseDetailData.name}` , youtubeOptions)
      setExcerciseVideos(excerciseVideoData.contents)
      const targetMuscleData = await fetchData(`${excerciseDbUrl}/exercises/target/${excerciseDetailData.target}` , excerciseOptions)
      setTargetMuscleData(targetMuscleData)
      // const equipmentData = await fetchData(`${excerciseDbUrl}/exercises/equipment/${excerciseDetailData.equipment}` , excerciseOptions)
      // setEquipmentData(equipmentData)
    }
    fetchExcerciseData()
  }, [id])
  return (
    <div>
      <Details excerciseDetail={excerciseDetail} />
      <ExcerciseVideos excerciseVideos={excerciseVideos} name={excerciseDetail.name} />
      <SimilarExcercises targetMuscleData={targetMuscleData} />
    </div>
  )
}

export default ExcerciseDetail