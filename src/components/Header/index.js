import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

const Header = () => (
  <nav>
    <div className="nav-header desktop-view">
      <div className="nav-header-logo">
        <img
          src="https://res.cloudinary.com/dtzajnril/image/upload/v1715422270/wrisbp6tg9uvexa8rtec.png"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="nav-header-title">
        <h1>LOGO</h1>
      </div>
      <div className="nav-header-icons">
        <img
          src="https://res.cloudinary.com/dtzajnril/image/upload/v1715423473/hhf6e2zhte7ra4xdupqw.png"
          alt="search"
          className="header-icon"
        />
        <img
          src="https://res.cloudinary.com/dtzajnril/image/upload/v1715423473/rs5l38qxrxst9ktkuw2m.png"
          alt="heart"
          className="header-icon"
        />
        <img
          src="https://res.cloudinary.com/dtzajnril/image/upload/v1715422651/gwiq4hymbmt0mjc4j9k5.png"
          alt="bag"
          className="header-icon"
        />
        <img
          src="https://res.cloudinary.com/dtzajnril/image/upload/v1715422651/od9ahlcdrd2hqkvqjpiw.png"
          alt="profile"
          className="header-icon"
        />
        <select className="header-select-language">
          <option>ENG</option>
          <option>HINDI</option>
          <option>TAMIL</option>
        </select>
      </div>
    </div>

    <div className="nav-header mobile-tablet-view">
      <div className="nav-header-logo">
        <GiHamburgerMenu className="logo" />
        <img
          src="https://res.cloudinary.com/dtzajnril/image/upload/v1715422270/wrisbp6tg9uvexa8rtec.png"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="nav-header-title">
        <h1>LOGO</h1>
      </div>
      <div className="nav-header-icons">
        <img
          src="https://res.cloudinary.com/dtzajnril/image/upload/v1715423473/hhf6e2zhte7ra4xdupqw.png"
          alt="search"
          className="header-icon"
        />
        <img
          src="https://res.cloudinary.com/dtzajnril/image/upload/v1715423473/rs5l38qxrxst9ktkuw2m.png"
          alt="heart"
          className="header-icon"
        />
        <img
          src="https://res.cloudinary.com/dtzajnril/image/upload/v1715422651/gwiq4hymbmt0mjc4j9k5.png"
          alt="bag"
          className="header-icon"
        />
      </div>
    </div>

    <div className="nav-tabs">
      <h1 className="nav-tab-heading">SHOP</h1>
      <h1 className="nav-tab-heading">SKILLS</h1>
      <h1 className="nav-tab-heading">STORIES</h1>
      <h1 className="nav-tab-heading">ABOUT</h1>
      <h1 className="nav-tab-heading">CONTACT US</h1>
    </div>
  </nav>
)

export default Header
