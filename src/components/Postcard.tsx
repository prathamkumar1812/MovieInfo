import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
function Postcard({ movie }) {
  return (
    <Card className="py-4 cursor-pointer">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover h-[340px] rounded-xl transition ease-in-out duration-500  hover:brightness-75"
          src={movie.poster_path && `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 flex-col items-center">
        <h4 className="font-bold ">{movie?.title.length > 10 ? movie.title.slice(0, 15) + ".." : movie?.title}</h4>
        <p className="text-tiny uppercase font-bold text-gray-500">Released :-
          <span className="text-default-500">{movie?.release_date}</span></p>


      </CardHeader>
    </Card>
  )
}

export default Postcard