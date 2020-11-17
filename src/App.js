import React from 'react';
import Header from './components/Header';
import './default.css';
import './main.js';
import FotoIgo from './assets/img/toga2.png';
import FotoDara from './assets/img/toga1.png';
import FotoAlif from './assets/img/toga3.png';
import JubahS2 from './assets/img/jubahs2.png';
import SyalIPB from './assets/img/syalipb.png';
import PaketHemat from './assets/img/pakethemat.png';
import Cumlaude from './assets/img/cumlaude.png';

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

                <img src={FotoIgo} alt="" className="home__img"></img>
            </div>
        </section>

        {/* COLLECTION */}
        <section className="collection section">
          <div className="collection__container bd-grid">
              <div className="collection__box">
                  <img src={FotoDara} alt="" className="collection__img"></img>
              
                  <div className="collection__data">
                      <h2 className="collection__title"><span className="collection__subtitle">Toga</span><br />Sarjana IPB</h2>
                      <a href="#" className="collection__view">View Collection</a>
                  </div>
              </div>

              <div className="collection__box">
                  <div className="collection__data">
                      <h2 className="collection__title"><span className="collection__subtitle">Toga</span><br />Pascasarjana IPB</h2>
                      <a href="#" className="collection__view">View Collection</a>
                  </div>

                  <img src={FotoAlif} alt="" className="collection__img"></img>
              </div>
          </div>
        </section>

        {/* FEATURED PRODUCT */}
        <section class="featured section" id="featured">
            <h2 class="section-title">FEATURED PRODUCT</h2>
            <a href="#" class="section-all">View All</a>

            <div class="featured__container bd-grid">
                <div class="featured__product">
                    <div class="featured__box">
                        <div class="featured__new">NEW</div>
                        <img src={JubahS2} alt="" class="featured__img"></img>
                    </div>

                    <div class="featured__data">
                        <h3 class="featured__name">Jubah Pascasarjana</h3>
                        <span class="featured__price">Rp 88.000</span>
                    </div>  
                </div>

                <div class="featured__product">
                    <div class="featured__box">
                        <div class="featured__new">NEW</div>
                        <img src={SyalIPB} alt="" class="featured__img"></img>
                    </div>

                    <div class="featured__data">
                        <h3 class="featured__name">Syal IPB</h3>
                        <span class="featured__price">Rp 49.500</span>
                    </div>  
                </div>

                <div class="featured__product">
                    <div class="featured__box">
                        <div class="featured__new">NEW</div>
                        <img src={PaketHemat} alt="" class="featured__img"></img>
                    </div>

                    <div class="featured__data">
                        <h3 class="featured__name">Paket Hemat</h3>
                        <span class="featured__price">Rp 75.000</span>
                    </div> 
                </div>

                <div class="featured_product">
                    <div class="featured__box">
                        <div class="featured__new">NEW</div>
                        <img src={Cumlaude} alt="" class="featured__img"></img>
                    </div>

                    <div class="featured__data">
                        <h3 class="featured__name">Selempang Cumlaude</h3>
                        <span class="featured__price">Rp 59.000</span>
                    </div>  
                </div>

            </div>
        </section>

      </main>
    </div>
  );
}

export default App;
