import React, { useEffect } from 'react'
import {Pagination} from "@nextui-org/react";
import { useDispatch,useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setPage } from '../Redux/feature/Moive/MovieSlice';
function Bottombar() {
  const {pathname} = useLocation()
  const [hidden, setHidden] = React.useState(false)
 useEffect(() => {
 // console.log(pathname.includes('/details'))
    if(pathname.includes('/details')){
      setHidden(true)
      console.log(hidden)
     
    
}},[hidden])

  const dispatch = useDispatch()

  return (
    <div className=' 
     text-center bottom-0  mt-10 flex flex-col items-center justify-center w-full'>
     <Pagination hidden={hidden} size='md' 
      
     color='primary'
     showControls total={10} 
     onChange={(e)=>dispatch(setPage(e))}

     />
     <p >© 2023 by Pratham kumar.</p>
    </div>  
  )
}

export default Bottombar