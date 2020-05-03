import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_KEY;

function App() {
  const [tvSeries, setTvSeries] = useState('');

  const movieURL = `https://api.themoviedb.org/3/trending/tv/day?api_key=${MOVIE_API_KEY}`

  useEffect (() => {
    axios
      .get(movieURL)
      .then((res) => {
          setTvSeries(res.data.data);
          console.log(res);
      }) 
      .catch(e => console.log('error while loading data', e));
  })

  return (
    <div className="appContainer">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">TV App <span role="img" aria-label="movie-emoji">🎥</span></h1>
            <h2 className="subtitle">Find cool TV Series.</h2>
            {/* <div className="result">{tvSeries}</div> */}
          </div>
        </div>
      </section>

      <div className="columns">
        <div className="column">
          <p className="title">Latest</p>
            <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://image.tmdb.org/t/p/w220_and_h330_face/qcr9bBY6MVeLzriKCmJOv1562uY.jpg" alt="" />
              </figure>
            </div>
            <div className="card-content">
              {/* <button type="button" className="education" onClick={(e) => this.getBoredData(e)}>Get Activity</button> */}
              {/* <p className="result">{tvSeries}</p> */}
            </div>
          </div>
        </div>
        <div className="column">
          <p className="title">Latest</p>
            <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://image.tmdb.org/t/p/w220_and_h330_face/qcr9bBY6MVeLzriKCmJOv1562uY.jpg" alt="" />
              </figure>
            </div>
            <div className="card-content">
            </div>
          </div>
        </div>
        <div className="column">
          <p className="title">Latest</p>
            <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://image.tmdb.org/t/p/w220_and_h330_face/qcr9bBY6MVeLzriKCmJOv1562uY.jpg" alt="" />
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
