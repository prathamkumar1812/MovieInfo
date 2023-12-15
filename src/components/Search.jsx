/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Postcard from './Postcard';
import { Helmet } from 'react-helmet';
import { fetchMovie, getMoive } from '../Redux/feature/Moive/MovieSlice';
import { useDispatch, useSelector } from 'react-redux';

function Search() {

  const { search } = useParams();
  const page = useSelector(state => state.page);
  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}&include_adult=true`
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies);
  useEffect(() => {
    const promives = getMoive(url);

    promives.then((response) => {

      dispatch(fetchMovie(response.data.results))

    })

  }, [page, search]);


  return (

    <div className='flex flex-1 items-center justify-center'>
      <Helmet>
      <meta charSet="utf-8" />
                <title>{search}-MovieInfo</title>
      </Helmet>
      <div className='grid  items-center grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:mx-32 lg:gap-6 md:gap-8 gap-5 md:mx-16 mx-5 mt-10'>
        {
          movies.map((movie, id) => {
            return (
              <Link to={`/details/${movie.id}`} key={id}>
                <Postcard movie={movie} />
              </Link>

            )
          })
        }

      </div>
    </div>

  )
}
export default Search