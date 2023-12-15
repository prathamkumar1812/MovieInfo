/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { confi } from '../conf';
import { Helmet } from 'react-helmet';
import YouTube from 'react-youtube';
import { getMoive } from '../Redux/feature/Moive/MovieSlice';
import { Chip, Image } from '@nextui-org/react';

function Details() {
  const opts = {
    height: '390',
    width: '800',
    playerVars: {
      autoplay: 0,
    },
  };
  const [videoId, setVideoId] = useState('')
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [cast, setCast] = useState([]);
  console.log(id);
  const url = confi.baseUrl + id
  useEffect(() => {
    window.scrollTo(0, 0)
    const promives = getMoive(url);
    const castPromises = getMoive(url + '/credits')
    const youtube = getMoive(url + '/videos')

    promives.then((response) => {
      setDetails(response.data)
    })
    castPromises.then((response) => {
      setCast(response.data.cast)
    })
    youtube.then((response) => {
      setVideoId(response.data.results[0]?.key)
    })

  }, [id])
  return (
    <div className='w-screen h-full' >
      <Helmet>
      <meta charSet="utf-8" />
                <title>details-MovieInfo</title>
      </Helmet>
      <div className=' mx-3 md:mx-5 lg:mx-10'>
        <div className='flex justify-between mt-5'>
          <div className='  mb-3'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl my-3'>{details.original_title
            }</h1>
            <ul className=' font-semibold text-gray-500 flex gap-3'>
              <li>{details.release_date}</li>
              <li>{details.runtime} min</li>
            </ul>
          </div>
          <ul className='flex gap-3 mt-5 my-2'>
            <div>
              <span className=' hidden md:block text-gray-400'>Vote Avg</span>
              <div className='flex gap-2 '>
                <svg xmlns="http://www.w3.org/2000/svg" className=' text-yellow-300' width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>
                <li>

                  {details.vote_average}</li>
              </div>
            </div>
            <div>
              <span className='hidden md:block text-gray-400'>Popularity</span>
              <div className='flex gap-2 '>
                <svg xmlns="http://www.w3.org/2000/svg" className='text-red-500' width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8 0-1.4.4-2.8 1-3.9L8.4 12c.4.4 1 .4 1.4 0l1.4-1.5 2.4 2.6-1.4 1.4c-.3.3-.1.9.4.9h4.3c.3 0 .5-.2.5-.5v-4.3c0-.4-.5-.7-.9-.3L15 11.6l-3.1-3.3c-.4-.4-1-.4-1.4 0L9.2 9.8 6.3 6.4C7.7 4.9 9.7 4 12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8z"></path></svg>
                <li>{details.popularity}</li>
              </div>
            </div>



          </ul>
        </div>
        <div className=' flex  gap-2 mb-5'>
          <Image
            alt="Card background"
            className="object-cover h-[360px] rounded-xl transition ease-in-out duration-500  hover:brightness-75"
            src={details.poster_path && `https://image.tmdb.org/t/p/w500/${details.poster_path}`}
            width={270}
          />
          <YouTube className=' hidden md:block lg:block' videoId={videoId} opts={opts} />
        </div>
        <div>

          <div className=' flex  flex-wrap gap-2 md:gap-5 my-3 md:my-5'>{
            details.genres?.map(({ name }) => {
              return (<Chip key={name} color="primary" variant="bordered">{name}</Chip>)
            })}</div>

          <p className='mb-5 border p-5 md:p-3 border-primary rounded-md'>{details.overview}</p>

          <div className=' bg-gray-100'>
            <h2 className='text-2xl my-2 mx-3 md:text-3xl'>Top Cast</h2>
            <div className='grid lg:grid-cols-2  grid-flow-col  lg:grid-flow-row lg:w-[60%] gap-2 relative overflow-auto scrollbar-hide  shadow-default-100'>
              {cast?.map(({ original_name, character
                , profile_path }) => {
                return (
                  <div className=' w-[25vh]  flex flex-col lg:flex-row  gap-3  items-center  lg:w-full  p-2' key={original_name}>
                    <Image src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : "/images/blank-profile-picture-973460_640.webp"} className=" w-21 h-21 lg:w-20 lg:h-20 rounded-full  object-cover" />
                    <div className='  text-center flex  justify-center lg:items-start items-center flex-col'>
                      <h1 className='font-semibold'>{original_name}</h1>
                      <p className=' text-sm md:text-medium  text-gray-500' >{character}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details