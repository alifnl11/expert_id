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
import logo1 from './assets/img/logo1.png'
import logo2 from './assets/img/logo2.png'
import logo3 from './assets/img/logo3.png'
import logo4 from './assets/img/logo4.png'


function App() {
  return (
    <div className="App">
      <Header />
      <main className="l-main">
        {/* HOME */}
        <section className="home" id="home">
            <div className="home__container bd-grid">
                <div className="home__data">
                    <h1 className="home__title">NEW<br></br><span>ARRIVAL</span></h1>
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

        {/* OFFER */}
        <section class="offer section">
            <div  class="offer__bg">
                <div class="offer__data">
                    <h2 class="offer__title">Special Offer</h2>
                    <p class="offer__description">Special offers discounts up to 20% only at 11.11 party flash sale</p>

                    <a href="#" class="button">SHOP NOW</a>
                </div>
            </div>
        </section>

        {/* NEW ARRIVAL */}
        <section class="new section" id="new">
            <h2 class="section-title">NEW ARRIVALS</h2>
            <a href="#" class="section-all">View All</a>

            <div class="new__container bd-grid">
                <div class="new__box">
                    <img src={JubahS2} alt="" class="new__img"></img>
                    <div class="new__link">
                        <a href="#" class="button">VIEW PRODUCT</a>
                    </div>
                </div>

                <div class="new__box">
                    <img src={Cumlaude} alt="" class="new__img"></img>
                    <div class="new__link">
                        <a href="#" class="button">VIEW PRODUCT</a>
                    </div>
                </div>

                <div class="new__box">
                    <img src={PaketHemat} alt="" class="new__img"></img>
                    <div class="new__link">
                        <a href="#" class="button">VIEW PRODUCT</a>
                    </div>
                </div>

                <div class="new__box">
                    <img src={SyalIPB} alt="" class="new__img"></img>
                    <div class="new__link">
                        <a href="#" class="button">VIEW PRODUCT</a>
                    </div>
                </div>
            </div>
        </section>

        {/* NEWSLETTER */}
        <section class="newsletter section" id="subscribed">
            <div class="newsletter__container bd-grid">
                <div class="newsletter__ subscribe">
                    <h2 class="section-title">OUR NEWSLETTER</h2>
                    <p class="newsletter__description">Promotion new product and special offers. Directly to your email</p>

                    <form action="" class="newsletter__form">
                        <input type="text" class="newsletter__input" placeholder="Enter your email"></input>
                        <a href="#" class="button">SUBSCRIBE</a>
                    </form>
                </div>
            </div>
        </section>

        {/* SPONSOR */}
        <section class="sponsors section">
            <div class="sponsors__container bd-grid">

              <div class="sponsors__logo">
                  <img src={logo1} alt=""></img>
              </div>

              <div class="sponsors__logo">
                  <img src={logo2} alt=""></img>
              </div>

              <div class="sponsors__logo">
                  <img src={logo3} alt=""></img>
              </div>

              <div class="sponsors__logo">
                  <img src={logo4} alt=""></img>
              </div>

            </div>
        </section>

      </main>
    </div>
  );
}

export default App;
