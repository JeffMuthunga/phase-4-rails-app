import React from 'react'
import styles from './CardDetails.module.css'
import oldman from './h.jpg'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReviewCard from '../ReviewCard/ReviewCard';



function CardDetails() {
  return (
    <div className={styles.body_container}>
        <h1>Hungama</h1>
        <h2>Project by Nawal Mubin</h2>
        <h3>Category: War</h3>
    <div className={styles.container}>
        <div className={styles.photo_container}>
            <img src={oldman} alt="Campaign image" />
        </div>
        <div className={styles.details_container}>
        <div className={styles.separator}>
            <h2>Campaign progress</h2>
            <hr className={styles.line}/>
        </div>
       
        <h3>End date: </h3>
        <div className={styles.progress_container}>
        <CircularProgressbar value={60} text={`${60}% of goal met`} strokeWidth={7} styles={{ 
            path: {
                stroke: '#1DA1F2',
                strokeLinecap: 'butt',
                transition: 'stroke-dashoffset 0.5s ease 0s',
            },
            text: {
                fill: 'black',
                fontSize: '10px',
            },
        }} />
        
    </div>
    <h3>Kshs50,000</h3>
    <h4>Goal: Kshs70,000</h4>

    <div className={styles.button}>
      <div className={styles.box}>P</div>
      <div className={styles.box}>L</div>
      <div className={styles.box}>E</div>
      <div className={styles.box}>D</div>
      <div className={styles.box}>G</div>
      <div className={styles.box}>E</div>
    </div>
        </div>

    </div>
    <div className={styles.separator}>
            <hr className={styles.line}/>
        </div>
    <div className={styles.description_reviews}>
    <div className={styles.description_container} style={{ gridColumn: "1 / span 2", width: "66.67%" }}>
        <h3>Story</h3>
        <h4>In the past, mainstream media has often played into several stereotypes when portraying South Asian characters and culture. Hungama strives to dismantle decades of these storylines and celebrate South Asian culture, while also finding a bridge between a cultural and Western identity.
        </h4>
    </div>
    
    <div className={styles.input_container} style={{ width: "33.33%" }}>
    <form >
        <label>Tell us your experience</label>
        <div className={styles.input_group}>
        <input type="text"  name="comment" placeholder="Leave a Review..."/>     
        <input type="number"  name="star_rating" placeholder="Stars"/>       
        <input type="submit"  value="Post Review"/>
        </div>
    </form>
    
    </div>
    </div>
    <div>
        <ReviewCard/>
    </div>

    </div>

  )
}

export default CardDetails