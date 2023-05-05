import React, { useState } from 'react'
import styles from './styles.module.css'
import dogopedia from '../../../assets/body/socialLogos/dogepedia.png'
import downarrow from '../../../assets/body/arrow/downarrow.png'

const Dogepedia = () => {
    const [showHidden, setShowHidden] = useState([]);

  function toggleHidden(index) {
    setShowHidden(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  }

  return (
    <div className={styles.container}>
        <div id='FAQ' className={styles.dogopediaCOntainer}>
            
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
                <div className={styles.lastPart_container}>
                    <div onClick={() => toggleHidden(0)} className={styles.lastPart}>
                        <img src={downarrow}/>
                        <p>A whale holds nearly 30% of MuskOnMars supply! Is this true?</p>
                    </div>
                    { 
                        showHidden[0] &&
                        <div className={styles.lastPart__hidden}>A common source of FUD surrounding MuskOnMars is the claim that certain wallets holding a large percentage of the supply are owned by private investors or so-called “whales”.</div>
                    }
                    
                </div>
                <div className={styles.lastPart_container}>
                    <div onClick={() => toggleHidden(1)} className={styles.lastPart}>
                        <img src={downarrow}/>
                        <p>MuskOnMars has no utility!</p>
                    </div>
                    {
                        showHidden[1] &&
                        <div className={styles.lastPart__hidden}>Oh yes it does, and it always has! The simple fact is that money has utility - and MuskOnMars is money! Indeed, MuskOnMars is one of the few cryptocurrencies that has been used for this main purpose from day one. </div>
                    }
                </div>
                <div>
                    <div onClick={() => toggleHidden(2)} className={styles.lastPart}>
                        <img src={downarrow}/>
                        <p>Can you put a cap on MuskOnMars?</p>
                    </div>
                    {
                        showHidden[2] && 
                        <div className={styles.lastPart__hidden}>Right now, and for the next hundred years or so, MuskOnMars operates like, and will continue to operate like, most other crypto assets. “Capped” assets are nowhere near mined out – and will continue adding to their supply, just like MuskOnMars, for the foreseeable future.</div>
                    }
                </div>
                <div>
                    <div onClick={() => toggleHidden(3)} className={styles.lastPart}>
                        <img src={downarrow}/>
                        <p>MuskOnMars and coin burning</p>
                    </div>
                    {
                        showHidden[3] &&
                        <div className={styles.lastPart__hidden}>MuskOnMars does not need coin burning marketing mechanisms that new tokens and other chains have attempted to implement to artificially inflate their prices. Simplez.</div>
                    }
                </div>
                <div>
                    <div onClick={() => toggleHidden(4)} className={styles.lastPart}>
                        <img src={downarrow}/>
                        <p>MuskOnMars has no developers!</p>
                    </div>
                    {
                        showHidden[4] &&
                        <div className={styles.lastPart__hidden}>Oh, yes it does - and it always has! MuskOnMars’s primary purpose has always been to be used as a currency. MuskOnMars was originally a fork of a cryptocurrency called Luckycoin - itself a fork of Litecoin. </div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dogepedia