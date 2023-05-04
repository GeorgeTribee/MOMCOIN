import React from 'react'
import styles from './body.module.css'
import video from '../../assets/body/socialLogos/video.mp4'
import dogesvg from '../../assets/momLogo.png'
const Body = () => {
  return (
    <div className={styles.container}>
        <video loop="loop" autoplay="autoplay" muted className={styles.background_clip}>
            <source src={video} type='video/mp4'/>
        </video>

        <div className={styles.content}>
            <img src={dogesvg}/>
            <p className={styles.dogecoin}>MuskOnMars</p>
            <p className={styles.paragraph}>"Invest in the future of space with Musk On Mars"</p>
        </div>
    </div>
  )
}

export default Body