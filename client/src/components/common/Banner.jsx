import React from 'react'
import billboardHeroImage from '../images/happiness.jpg'
import styles from './Banner.module.css'

function Banner() {
  return (
    <div className={styles.billboard}>
        <div className={styles.innerContainer}>
            <div className={styles.imageWrapper}>
                <img className={styles.heroImage} src={billboardHeroImage}  alt="Child smiling" />
                <div className={styles.billboard__fadeBottom}/>
            </div>
            <div className={styles.info}>
                <div className={styles.description}>
                   <span>
                    <h1 style={{fontWeight: 'bolder'}}>
                        Step Forward, Make the World a <span style={{color: "green"}}>Better Place.</span>
                    </h1>
                    </span> 
                    We help organizations transform peolpe's lives by creating a platform to raise funds! 
                </div>
                <div className={styles.buttonLinks}>
                        <a className='billboard_btn btn btn-success btn-lg' href='/'> 
                            <span>Get Started</span>               
                        </a>
                        <button className='billboard_btn btn btn-secondary btn-lg'>
                            Got Questions?
                        </button>
                    </div> 
            </div>

        </div>
    </div>
  )
}

export default Banner