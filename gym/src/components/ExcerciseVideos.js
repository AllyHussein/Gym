import React from 'react'

const ExcerciseVideos = ({excerciseVideos , name}) => {
  return (
    <div className='p-4'>
        <h1 className='h1'>Watch <strong className='text-danger'>{name}</strong> Excercise Videos</h1>
        <div style={{display : 'flex' , justifyContent : "space-around" , flexWrap : "wrap"}}>
            {excerciseVideos?.slice(0 , 10).map((excerciseVideo) => (
                <div className='m-4' style={{maxWidth : "360px", width : '100%'}}>
                    <a href={`https://www.youtube.com/watch?v=${excerciseVideo.video.videoId}`} target='_blank' rel='noreferrer'>
                        <img style={{width : "100%" , maxHeight : "200px" , objectFit : "cover"}}  src={excerciseVideo.video.thumbnails[0].url} alt={excerciseVideo.video.title} />
                    </a>
                    <div className='mt-3'>
                        <p className='mb-2' style={{fontSize : "25px" , fontWeight : "bold"}}>{excerciseVideo.video.title}</p>
                        <p style={{fontSize : "20px"}}>{excerciseVideo.video.channelName}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ExcerciseVideos