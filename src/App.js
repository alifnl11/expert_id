import React from 'react';
import Header from './components/Header';
import './default.css';
import './main.js';
import homePic from './assets/img/home.png';
import backpackMan from './assets/img/backpackMan.png'
import backpackWoman from './assets/img/backpackWoman.png'

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

        <section className="collection section">
          <div className="collection__container bd-grid">
              <div className="collection__box">
                  <img src={backpackMan} alt="" className="collection__img"></img>
              
                  <div className="collection__data">
                      <h2 className="collection__title"><span className="collection__subtitle">Men</span><br />Backpack</h2>
                      <a href="#" className="collection__view">View Collection</a>
                  </div>
              </div>

              <div className="collection__box">
                  <div className="collection__data">
                      <h2 className="collection__title"><span className="collection__subtitle">Woman</span><br />Backpack</h2>
                      <a href="#" className="collection__view">View Collection</a>
                  </div>

                  <img src={backpackWoman} alt="" className="collection__img"></img>
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
