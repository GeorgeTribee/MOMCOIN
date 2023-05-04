import React from 'react'
import styles from './styles.module.css'
import twitter from '../../../assets/body/socialLogos/twitter.svg'

const Footer = () => {
  return (
    <div className={styles.container}>
        <span>Find out more about MuskOnMars</span>
        <div className={styles.container__}>
            
        </div>



        <div className={styles.nextContainer}>
            
            <div className={styles.childDiv}>
                <p className={styles.childTitle}>Contact</p>
                <div className={styles.childItem}>
                    <p>muskonmarscoin@gmail.com</p>
                    <a href='https://twitter.com/muskonmarscoin' target='_blank'>
                        <img src={twitter}/>
                    </a>
                </div>
            </div>
            <div className={styles.childDiv}>
                <p className={styles.childTitle}>Sitemap</p>
                <ul className={styles.childItem}>
                    <li>So Home</li>
                    <li>What is MOM?</li>
                    <li>Very Community</li>
                </ul>
            </div>
            <div className={styles.childDiv}>
                <p className={styles.childTitle}>About</p>
                <ul className={styles.childItem}>
                    <li>About</li>
                    <li>Documentation</li>
                    <li>Tokenomics</li>
                    <li>Resources</li>
                </ul>
            </div>
        </div>

        
        <div className={styles.lastContainer}>
            <p className={styles.lastBorder}></p>
            <p>Contributors</p>
            <p className={styles.lastEl}>© 2023 | The MuskOnMars Foundation & MuskOnMars Project. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer