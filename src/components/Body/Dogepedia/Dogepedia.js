import React from 'react'
import styles from './styles.module.css'
import dogopedia from '../../../assets/body/socialLogos/dogepedia.png'
import downarrow from '../../../assets/body/arrow/downarrow.png'

const Dogepedia = () => {
  return (
    <div className={styles.container}>
        <div className={styles.dogopediaCOntainer}>
            
            <div className={styles.middleContainer}>
                <p className={styles.padd}>FAQ</p>
                <p className={styles.border}></p>
                <p className={styles.padd}>Resources</p>
                <p className={styles.border}></p>
                <p className={styles.padd}>How To's</p>
                <p className={styles.border}></p>
                <p className={styles.padd}>Documentation</p>
                <p className={styles.border}></p>
            </div>
            <div className={styles.last}>
                <div className={styles.lastPart}>
                    <img src={downarrow}/>
                    <p>A whale holds nearly 30% of MuskOnMars supply! Is this true?</p>
                </div>
                <div className={styles.lastPart}>
                    <img src={downarrow}/>
                    <p>MuskOnMars has no utility!</p>
                </div>
                <div className={styles.lastPart}>
                    <img src={downarrow}/>
                    <p>Can you put a cap on MuskOnMars?</p>
                </div>
                <div className={styles.lastPart}>
                    <img src={downarrow}/>
                    <p>MuskOnMars and coin burning</p>
                </div>
                <div className={styles.lastPart}>
                    <img src={downarrow}/>
                    <p>MuskOnMars has no developers!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dogepedia