// import { useEffect } from 'react';

import { Link } from 'react-router-dom';

export default function Home() {
  //   useEffect(() => {
  //     // HTTP
  //   }, []);

  const arr = [
    { title: 'movie-1', id: 1 },
    { title: 'movie-2', id: 2 },
    { title: 'movie-3', id: 3 },
    { title: 'movie-4', id: 4 },
    { title: 'movie-5', id: 5 },
    { title: 'movie-6', id: 6 },
    { title: 'movie-7', id: 7 },
    { title: 'movie-8', id: 8 },
  ];

  return (
    <div>
      {arr.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
