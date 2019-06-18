import React, {Component} from 'react';
import MovieList from '../components/MovieList';
import MovieForm from '../components/MovieForm';
import MovieRelease from '../components/MovieRelease';
// import MovieRelease from '../components/MovieRelease';
 class MovieView extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
  {
    id: 1,
    name: "Spider-Man: Into the Spider-Verse",
    url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
  },
  {
    id: 2,
    name: "Life Itself",
    url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
  },
  {
    id: 3,
    name: "Mary Queen of Scots",
    url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
  },
  {
    id: 4,
    name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
  },
  {
    id: 5,
    name: "Captain Marvel",
    url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
  }
]

  }
  this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
}
// the updated movie is updated in the form and we called that in the function
// (handleMovieSubmit) in movie view and will pass that funcion in Movie form
 handleMovieSubmit(newMovie){
  newMovie.id = Date.now();
  const updatedMovies = [...this.state.data, newMovie];
   this.setState({data: updatedMovies})
}



render(){
  return(

    <div>
// we passed handleMovieSubmit in the Movieform
    < MovieForm onMovieSubmit = {this.handleMovieSubmit}/>
    <hr />
    < MovieList data={this.state.data} />
    <hr />
    <MovieRelease />
    </div>
  );
}
}
  export default MovieView;
