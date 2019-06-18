import React from 'react';
const Movie = (props) => {
  return (
  <div className="moive">

    <h3>{props.name}</h3>
    <nav>
    <a href={props.url}>url</a>
    </nav>
  </div>
  );
}
export default Movie;
