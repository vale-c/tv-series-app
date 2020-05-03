import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';

const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_KEY;

function App() {
  const [TvData, setTvData] = useState([]);
  
  useEffect (() => {
    const movieURL = `https://api.themoviedb.org/3/trending/tv/day?api_key=${MOVIE_API_KEY}&page=1`
    //let PROXY = `https://cors-anywhere.herokuapp.com/`;

    axios
      .get(movieURL)
      .then((res) => {
          setTvData(res.data.results);
          //console.log(res.data.results);
      }) 
      .catch(e => console.log('error while loading data', e));
    }, [])

    const renderData = () => {
      let imgUrl = `https://image.tmdb.org/t/p/w500/`;

      return TvData.map(info => {
        return (
          <div className="columns">
            <div className="column">
              <p className="title">{info.name}</p>
                <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <img src={imgUrl+info.poster_path} alt="img" />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="result">{info.overview}</p>
                  <p className="vote">{info.average_score}</p>
                </div>
              </div>
            </div>
          </div>
        );
      }
    )}

  return (
    <div className="appContainer">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">TV App <span role="img" aria-label="movie-emoji">🎥</span></h1>
            <h2 className="subtitle">Find epic TV Series.<span role="img" aria-label="movie-emoji">👌</span></h2>
          </div>
        </div>
      </section>
        {renderData()}
    </div>
  )
};

export default App;
