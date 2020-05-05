import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';

const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_KEY;

const desc = document.querySelectorAll('p.overview');
const observer = new ResizeObserver(entries => {
  for (let entry of entries) {
    entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
  }
});

desc.forEach(p => {
  observer.observe(p);
});


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
      let imgUrl = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/`;

      return TvData.map(info => {
        return (
            <div class="column">
              <div className="card">
                <p className="title">{info.name}</p>
                <div className="card-content">
                  <div className="card-image">
                    <figure className="image">
                      <img src={imgUrl+info.poster_path} alt="img" />
                    </figure>
                  </div>
                  <div className="card-text">
                    <div className="truncate-overflow">
                      <p className="overview">{info.overview}</p>  
                      <label for="expanded" role="button">read more</label>
                    </div>
                    <p className="vote">{info.vote_average}</p>
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
      <div className="row">
        {renderData()}
      </div>
        
    </div>
  )
};

export default App;
