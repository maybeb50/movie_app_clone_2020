import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // console.log(movies);
    this.setState({ 
      movies, // movies: movies 와 같음. 축약한거임 
      isLoading: false,
    });
  }

  componentDidMount() {
    // 영화 데이터 로딩
    // setTimeout(() => {
    //   this.setState({
    //     isLoading: false,
    //   })
    // }, 3000);
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    // console.log(movies);
    return(
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        )
        : (
          <div className="movies">
            {
              movies.map((movie) => {
                return(
                  <Movie
                    key={movie.id}
                    id={movie.id} 
                    title={movie.title}
                    year={movie.year}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                )
              })
            }
          </div>
        )
      }</section>
    );
  }
}

export default App;
