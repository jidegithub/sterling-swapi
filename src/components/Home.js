import React from 'react';
import '../home.scss';
import starlogo from '../assets/logo.png';
// import Filter from './Filter';

const Home = () => (
  <>
    <div className="logo-box">
      <img src={starlogo} alt="logo" className="logo" />
    </div>

    <div className="input-label">
      <div className="borderBottom">
        <img src={starlogo} alt="logo" className="logo" />
        <span className="directory">Directory</span>
      </div>
      <hr />
      <p className="input-label-spec">
        {' '}
        find your favourite characters, films, species, starships and planets{' '}
      </p>
    </div>
  </>
);

export default Home;
