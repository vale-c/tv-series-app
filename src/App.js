import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';

const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_KEY;


function App() {
  const [tvSeriesName, setTvSeriesName] = useState('');
  const [imgCover, setImgCover] = useState('');

  useEffect (() => {
    const movieURL = `https://api.themoviedb.org/3/trending/tv/day?api_key=${MOVIE_API_KEY}&page=1`

    axios
      .get(movieURL)
      .then((res) => {
          setTvSeriesName(res.data.results[0].name);
      }) 
      .catch(e => console.log('error while loading data', e));

      let PROXY = `https://cors-anywhere.herokuapp.com/`;
      let imgUrl = `https://image.tmdb.org/t/p/w500/`;

      axios
        .get(movieURL)
        .then((res) => {
          setImgCover(imgUrl + res.data.results[0].poster_path)
        })
        .catch(e => console.log('error while fetching image!', e))
  })

  return (
    <div className="appContainer">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">TV App <span role="img" aria-label="movie-emoji">🎥</span></h1>
            <h2 className="subtitle">Find epic TV Series.👌</h2>
          </div>
        </div>
      </section>

      <div className="columns">
        <div className="column">
          <p className="title">{tvSeriesName}</p>
            <div className="card">
            <div className="card-image">
              <figure className="image">
                <img src={imgCover} alt="img" />
              </figure>
            </div>
            <div className="card-content">
              <p className="result"></p>
            </div>
          </div>
        </div>
        <div className="column">
          <p className="title">{tvSeriesName}</p>
            <div className="card">
            <div className="card-image">
              <figure className="image">
                <img src={imgCover} alt="img" />
              </figure>
            </div>
            <div className="card-content">
            </div>
          </div>
        </div>
        <div className="column">
          <p className="title">{tvSeriesName}</p>
            <div className="card">
            <div className="card-image">
              <figure className="image">
                <img src={imgCover} alt="img" />
              </figure>
            </div>
            <div className="card-content">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
