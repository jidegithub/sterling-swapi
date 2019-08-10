import React from 'react';
import '../home.css';
import starlogo from '../assets/logo.png';
import Filter from './Filter';

const Home = () => (
  <>
  <div className="logo-box">
      <img src={starlogo} alt="logo" className="logo" /> 
    </div>

    <div className="input-label">
      <div className = "borderBottom">
        <img src={starlogo} alt="logo" className="logo" /> 
        <span className="directory">Directory</span>
      </div>
      <hr/>
      <p className="input-label-spec"> find your favourite characters, films, species, starships and planets </p>
    </div>
    {/* <div className="overall-cont">
        <div className="logo-box">
            <img src={starlogo} alt="logo" className="logo" /> 
        </div>
        
          <form>
            <div id="bottom">
              <div className="input-label">
                <div className = "borderBottom">
                  <img src={starlogo} alt="logo" className="logo" /> 
                  <span className="directory">Directory</span>
                </div>
                <hr/>
                <p className="input-label-spec"> find your favourite characters, films, species, starships and planets </p>
              </div>
              <input name="email" type="text" className="input-box" placeholder="enter a search term" />
            </div>
          </form>
    </div> */}
    {/* <div>
      popular people
      <People />
    </div>
    <div>
      planets
      <Planets />
    </div>
    <div>
      starships
      <Starships />
    </div> */}
    
  </>
);

export default Home;
