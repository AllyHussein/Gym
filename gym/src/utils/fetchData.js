export const excerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1b94d6a4cemshbc6b01cc3d895edp17d332jsnc98014a50815',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1b94d6a4cemshbc6b01cc3d895edp17d332jsnc98014a50815',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url , options)  => {
    const response = await fetch (url, options)
    const data = await response.json()
    return data
}