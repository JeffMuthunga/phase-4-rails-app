import React from 'react'
import styles from './ReviewCard.module.css'

function ReviewCard() {
    // let plants = Array(data.star_rating).fill("🔥")
    // {data.star_rating} {plants.join("")}
  return (
    <div className={styles.l-card-around}>
    <main className={styles.l-card}>
	<section className={styles.l-card__text}>
		<p>
			avsvvsdvsdvsdvkhihknkkkiihihihjojojihihiihih
		</p>
	</section>
	<section className={styles.l-card__user}>
		<div className={styles.l-card__userImage}>
			<img src="https://thumbs.dreamstime.com/b/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-107388687.jpg" alt="Naruto"/>
		</div>
		<div className={styles.l-card__userInfo}>
			<span>asdjjasbdjsb</span>
			<span> 6 🔥🔥🔥🔥🔥 </span>
		</div>
	</section>
</main>
</div>
  )
}

export default ReviewCard