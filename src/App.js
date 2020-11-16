import React from 'react';
import Header from './components/Header';
import './default.css';
import './main.js';
import homePic from './assets/img/home.png';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="l-main">
        {/* HOME */}
        <section className="home" id="home">
          <div className="home__container bd-grid">
            <div className="home__data">
              <h1 className="home__tittle">NEW<br></br><span>ARRIVAL</span></h1>
              <a href="#featured" className="button">GO SHOPPING</a>
            </div>

            <img src={homePic} alt="" className="home__img"></img>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
