import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css'

function Row({title,fetchUrl,isposter}) {
  /* console.log(fetchUrl); */

  const[allmovies,setallmovies]=useState()
  const base_url = "https://image.tmdb.org/t/p/original/";


  const fetchData = async()=>{
       const {data}=await instance.get(fetchUrl)
       /* const {results}=data */
       setallmovies(data.results);
  }
console.log(allmovies);

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='movie-row'>
        {
          allmovies?.map(item=>(
            <img className={`movie  ${isposter && 'movie-poster'}`} src={`${base_url}${isposter?item.poster_path:item.backdrop_path}`} alt="no image" />
          ))
        }
      </div>
      </div>
  )
}

export default Row