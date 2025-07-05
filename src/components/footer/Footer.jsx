import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>Ganesha</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/ganesh-jadhav-8ab720234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><BsLinkedin/></a>
          <a href="https://github.com/ganesha2208"><BsGithub/></a>
          <a href="https://medium.com/@ganeshadream11"><BsMedium/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Ganesh Jadhav. All rightts reserved.</small>
        </div>
    </footer>
  )
}

export default Footer