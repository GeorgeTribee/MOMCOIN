import React from 'react'
import styles from './styles.module.css'
import first from '../../../assets/body/fourDogPic/first.png'
import second from '../../../assets/body/fourDogPic/second.png'
import third from '../../../assets/body/fourDogPic/third.png'
import fourth from '../../../assets/body/fourDogPic/fourth.png'
import twitter from '../../../assets/body/socialLogos/twitter.svg'
import discord from '../../../assets/body/socialLogos/discord.svg'
import reddit from '../../../assets/body/socialLogos/reddit.svg'
import MOM from '../../../assets/body/fourDogPic/MOM.mp4'

const Doge = () => {
  return (
    <div className={styles.container}>
       

        <div className={styles.videoContainer}>
            <div className={styles.iframe}>
                <video controls src={MOM}></video>
            </div>
            <div className={styles.rightSide}>
                <h2>Do Only Good Everyday.</h2>
                <p>The MuskOnMars community cares about supporting each other, being kind, teaching people about cryptocurrency, fundraising, having fun, making memes, and being absurd. This is nicely captured by MuskOnMars’s unofficial tagline: Do Only Good Everyday. Get involved in our awesome community via the below links:</p>
            </div>
        </div>
        
    </div>
  )
}

export default Doge