import React, { Component } from 'react';
import axios from 'axios';
import ErrorBoundary from '../ErrorBoundary';
import Movie from '../components/Movie';
import './Home.css';

class Home extends Component {
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
    
    this.setState({ 
      movies, // movies: movies 와 같음. 축약한거임 
      isLoading: false,
    });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return(
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        )
        : (
          <ErrorBoundary>
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
          </ErrorBoundary>
        )
      }</section>
    );
  }
}

export default Home;
