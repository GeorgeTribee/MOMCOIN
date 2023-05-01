import React, { useState } from 'react'
import styles from './styles.module.css'
import image from '../../assets/MuskOnMars.png'
import shirtSVG from '../../assets/headerlogo/shirt-solid.svg'
import togglerSVG from '../../assets/headerlogo/theme-toggler.svg'
import englandSVG from '../../assets/headerlogo/england.svg'

const Header = () => {
  const [dogopedia, setDogopedia] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <a href='muskonmars.xyz'>
          <img src={image}/>
          <span>MuskOnMars</span>
        </a>
      </div>
      <div className={styles.navigation}>
        <nav>
        <ul className={styles.navigation__leftside}>
          <li><a href='#'>So Home</a></li>
          <li><a href='#aboutMuskOnMars'>What is MOM?</a></li>
          <li><a href='#'>Very Community</a></li>
          <li className={styles.dogopedia}>
            <a className={styles.dogShow} href='#'>So MOM
              <div className={styles.show}>
                <p>Documentation</p>
                <p>FAQ</p>
                <p>How Tos</p>
                <p>Resources</p>
              </div>
            </a>
            <span>▾</span>
          </li>
         
        </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header