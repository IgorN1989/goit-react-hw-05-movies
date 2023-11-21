// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetais() {
  const { movieId } = useParams();
  //   console.log(movieId);

  // useEffect(()=>{
  //     // HTTP
  // },[])

  return <div>MOVIE DETAILS: MOVIE-{movieId}</div>;
}
