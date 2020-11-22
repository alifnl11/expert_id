import React from 'react';
import 'boxicons';
import footer1 from '../Footer/assets/img/footerstore1.png';
import footer2 from '../Footer/assets/img/footerstore2.png';

const Footer = props => {
    return (
        <footer class="footer section">
            <div class="footer__container bd-grid">
                <div class="footer__box">
                    <h3 class="footer__title">expert.id</h3>
                    <p class="footer__deal">Product Store</p>
                    <a href="#"><img src={footer1} alt="" class="footer__store"></img></a>
                    <a href="#"><img src={footer2} alt="" class="footer__store"></img></a>
                </div>

                <div class="footer__box">
                    <h3 class="footer__title">EXPLORE</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Home</a></li>
                        <li><a href="#" class="footer__link">Featured</a></li>
                        <li><a href="#" class="footer__link">New</a></li>
                        <li><a href="#" class="footer__link">Subscribe</a></li>
                    </ul>
                </div>

                <div class="footer__box">
                    <h3 class="footer__title">OUR SERVICE</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Free Shiping</a></li>
                        <li><a href="#" class="footer__link">Ready Stock</a></li>
                        <li><a href="#" class="footer__link">Gift Cards</a></li>
                    </ul>
                </div>

                <div class="footer__box">
                    <h3 class="footer__title">FOLLOW</h3>
                    <a href="#" class="footer__social"><box-icon type='logo' name='facebook-circle'></box-icon></a>
                    <a href="#" class="footer__social"><box-icon name='instagram' type='logo' ></box-icon></a>
                    <a href="#" class="footer__social"><box-icon name='whatsapp' type='logo' ></box-icon></a>                 
                </div>
            </div>

            <p class="footer__copy">&#169; 2020 copyright all right reserved</p>
        </footer>
    );
};

export default Footer;