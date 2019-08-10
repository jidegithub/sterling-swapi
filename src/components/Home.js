import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import '../home.css';
// import logo from '../logo.svg';

const Home = () => (
  <div className="overall-cont">
    <>
        {/* <Image src={logo} size="small" centered /> */}

        <form>
          <div id="bottom">
            <input name="email" type="text" placeholder="place" />
          </div>
        </form>
        <div className="word">Star Wars</div>
    </>
  </div>
  
);

export default Home;
