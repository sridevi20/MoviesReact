import React from 'react';
import Movie from './Movie';
const MovieList = (props) =>{
  // render components array
    const movieNodes = props.data.map((movie) => {
      return (
        // instaed of passing movie objects just pass the
        // whole movie class inside the function
        <Movie name={movie.name} url={movie.url} key={movie.id}/>
      )
    })
    return (
      <div>
      {movieNodes}
      </div>
    );
}
export default MovieList;
