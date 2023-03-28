import React from 'react'
import styles from './CardDetails.module.css'
import oldman from './old_man_campaign.jpg'

function CardDetails() {
  return (
    <div className={styles.body_container}>
    <div className={styles.container}>
        <h1>Hungama</h1>
        <h2>Project by Nawal Mubin</h2>
        <h3>Category: War</h3>
        <div className={styles.photo_container}>
            <img src={oldman} alt="Campaign image" />
        </div>
        <div className={styles.details_container}>

        </div>

    </div>
    </div>
  )
}

export default CardDetails