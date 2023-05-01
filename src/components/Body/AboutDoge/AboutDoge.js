import React from 'react'
import styles from './styles.module.css'
import aboutDogePic from '../../../assets/body/aboutDoge/aboutImage.png'

const AboutDoge = () => {
  return (
    <div className={styles.container}>
        <div className={styles.container__}>
            <div className={styles.content}>
                <h2 id='aboutMuskOnMars'>What is MuskOnMars?</h2>
                <p>MuskOnMars (MOM) is a groundbreaking crypto coin that embodies the innovative spirit of Elon Musk and his vision for the future of space exploration. With MOM, investors can support the development of space technologies and the eventual colonization of Mars. Join the movement towards a new frontier with MuskOnMars (MOM) and be a part of history in the making.</p>
            </div>
            <div className={styles.dogepic}>
                <img src={aboutDogePic}/>
            </div>
        </div>

        <div className={styles.gettingStarted}>
            <h2>Getting started</h2>
            <div className={styles.getting__container}>
                <div className={styles.getting__child}>
                    <span>01</span>
                    <span>choose  your wallet</span>
                    <p className={styles.pickwallet}>A wallet is necessary for people wanting to use, trade, or hold MuskOnMars. You can pick a wallet</p>
                    <p>Learn more.</p>
                </div>

                <div className={styles.getting__child}>
                    <span>01</span>
                    <span>choose  your wallet</span>
                    <p className={styles.pickwallet}>A wallet is necessary for people wanting to use, trade, or hold MuskOnMars. You can pick a wallet</p>
                    <p>Guide.</p>
                </div>

                <div className={styles.getting__child}>
                    <span>01</span>
                    <span>choose  your wallet</span>
                    <p className={styles.pickwallet}>A wallet is necessary for people wanting to use, trade, or hold MuskOnMars. You can pick a wallet</p>
                    <p>Learn more.</p>
                </div>
            </div>  {/* end of .getting__container*/}
        </div>
    </div>
  )
}

export default AboutDoge