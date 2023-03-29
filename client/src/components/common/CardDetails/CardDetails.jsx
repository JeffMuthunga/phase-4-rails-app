import React from 'react'
import styles from './CardDetails.module.css'
import oldman from './h.jpg'

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
            <h1>sibasid</h1>
            <hr className={styles.line}/>
        </div>
        aksfk
        
        </div>

    </div>
    <div className={styles.input_container}>
    <form >
        <label htmlFor="fname"> Leave a Review</label>
        <div className={styles.input_group}>
        <input type="text"  name="comment" placeholder="Leave a Review..."/>     
        <input type="number"  name="star_rating" placeholder="Stars"/>       
        <input type="submit"  value="Post Review"/>
        </div>
    </form>
    </div>
    </div>

  )
}

export default CardDetails