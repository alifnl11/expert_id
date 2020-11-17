import React from 'react';
import './styles.css';
import 'boxicons';

const Header = props => {
    return (
        <header class="l-header">
          <nav class="nav bd-grid">
            <div>
              <a href="#" class="nav__logo">expert.id</a>
            </div>

            <div class="nav__menu" id="nav-menu">
              <ul class="nav_list">
                <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                <li class="nav__item"><a href="#featured" class="nav__link">Featured</a></li>
                <li class="nav__item"><a href="#new" class="nav__link">New</a></li>
                <li class="nav__item"><a href="#subscribed" class="nav__link">Subscribed</a></li>
              </ul>
            </div>

            <div>
                <box-icon name='cart' class="nav__cart"></box-icon>
                <box-icon name='menu' class="nav__toggle" id="nav-toggle"></box-icon>
            </div>
          </nav>
      </header>
    );
};

export default Header;