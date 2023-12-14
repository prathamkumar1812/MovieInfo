import { CircularProgress } from '@nextui-org/react'
import React from 'react'

function Loader() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
<CircularProgress className='w-screen' size="lg" aria-label="Loading..."/>
    </div>
  )
}

export default Loader