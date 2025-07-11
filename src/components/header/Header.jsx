import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me-new.JPG'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h5>Hello, I'm</h5>
          <h1>Ganesh Jadhav</h1>
          <h5 className="text-light">Software Engineer | Full Stack Developer </h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

          <a href="#contacts" className='scroll__down'>Scroll Down</a>
        </div>
      </header>

    
    
  )
}

export default Header