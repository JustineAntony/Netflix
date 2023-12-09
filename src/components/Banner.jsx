import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance';

function Banner({fetchurl}) {
  /* console.log(fetchurl); */

  const[movie,setmovie]= useState()
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData=async()=>{
   const {data}= await instance.get(fetchurl)
   /* console.log(data.results[Math.floor(Math.random()*data.result.length)]); */
    setmovie(data.results[Math.floor(Math.random()*data.results.length)]);
  }

  console.log(movie);

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div style={{height:"600px" ,backgroundImage:`url( ${base_url }${movie?.backdrop_path})`, backgroundPosition:'center',backgroundSize:"cover" ,backgroundAttachment:'fixed'}}>
      <div className='banner-content'>
        <h1>{movie?.name}</h1>
        <button type="button" class="btn btn-danger fs-4 fw-bolder">Play <i class="fa-solid fa-play"></i></button>
        <button  type="button" class="btn border-white fs-4 fw-bolder ms-5 btn-outline-light">More Info <i class="fa-solid fa-caret-down"></i></button>
        <h2>{movie?.overview}</h2>
      </div>
    </div>
  )
}

export default Banner