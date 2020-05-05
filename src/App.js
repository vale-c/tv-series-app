import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import ReactTextCollapse from 'react-text-collapse';

const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_KEY;

const TEXT_COLLAPSE_OPTIONS = {
  collapse: false,
  collapseText: '...show more',
  expandText: 'show less',
  minHeight: 70,
  maxHeight: 180,
  textStyle: {
    backgroundColor: 'black',
    margin: '10px',
    color: 'white',
    fontSize: '18px',
    float: 'center'
  }
}

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
  
    const imgUrl = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/`;

      return TvData.map(info => {
        return (
            <div className="column" key={info.id}>
              <div className="card">
                <p className="title">{info.name}</p>
                <div className="card-content">
                  <div className="card-image">
                    <figure className="image">
                      <img src={imgUrl+info.poster_path} alt="img" />
                    </figure>
                  </div>
                  <div className="card-text">
                    <div className="box">
                      <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS} style={{color: "red"}}>
                        <p>
                          {info.overview}
                        </p>
                      </ReactTextCollapse>
                      <span className="score">Score:</span>
                      <p className="vote">{info.vote_average}</p>
                    </div>
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
