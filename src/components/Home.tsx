import React, { useEffect, useState } from 'react'
import Postcard from './Postcard'
import {CircularProgress, Spinner} from "@nextui-org/react";
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import { fetchMovie, getMoive } from '../Redux/feature/Moive/MovieSlice';
import { confi } from '../conf';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
function Home() {
    const page= useSelector(state => state.page);
    const url=confi.baseUrl+'popular?language=en-US&page='+page;
    const dispatch = useDispatch()
  

    const movies = useSelector((state) => state.movies);
   
    
     const[loader,setLoader]= useState(true)
    useEffect(() => {
    const promives=getMoive(url);

     promives.then((response)=>{
       
       dispatch(fetchMovie(response.data.results))
        setLoader(false)
     })
      
    }, [page]);


  return  (
    
    <div className='flex flex-1 items-center justify-center'>
       <div className='grid  items-center grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:mx-32 lg:gap-6 md:gap-8 gap-5 md:mx-16 mx-5 mt-10'>
        {
            movies.map((movie,id)=>{
                return (
                  <Link to={`/details/${movie.id}`} key={id}>
                     <Postcard movie={movie}/>
                  </Link>
                   
                )
            })
        }

       </div>
    </div>

  )
}

export default Home