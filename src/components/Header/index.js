import React from 'react';
import './styles.css';
import 'boxicons';

const Header = props => {
    return (
        <header class="l-header">
          <nav class="nav bd-grid">
            <div>
              <a href="#" class="nav_logo">SARA</a>
            </div>

            <div class="nav_menu" id="nav-menu">
              <ul class="nav_list">
                <li class="nav_item"><a href="#home" class="nav_link">Home</a></li>
                <li class="nav_item"><a href="#featured" class="nav_link">Featured</a></li>
                <li class="nav_item"><a href="#new" class="nav_link">New</a></li>
                <li class="nav_item"><a href="#subscribed" class="nav_link">Subscribed</a></li>
              </ul>
            </div>

            <div>
                <box-icon name='cart' class="nav_cart"></box-icon>
                <box-icon name='menu' class="nav_toggle" id="nav-toggle"></box-icon>
            </div>
          </nav>
      </header>
    );
};

export default Header;