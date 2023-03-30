import React, {useState, useEffect} from 'react'
import styles from './CardDetails.module.css'
import oldman from './h.jpg'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReviewCard from '../ReviewCard/ReviewCard';
import {useParams} from 'react-router-dom'




function CardDetails() {
    const id = useParams().id

    
    const [data, setData] = useState([])
    const [pledge, setPledge] = useState(0)

    useEffect(()=>{
        fetch(`/campaigns/${id}`)
        .then(r => r.json())
        .then((data) => setData(data))

    }, [])
    let goal_percent = Math.round((data.current_amount/data.goal_amount)*100)
   
    function handleChange(e){
       setPledge(e.target.value)
    }
    

    function handleClick() {
        fetch("/pledges", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                pledge_amount: pledge,
                user_id: 3,
                campaign_id: id
        })
        })
        window.location.reload();
    }


  return (
    <div className={styles.body_container}>
        <h1>{data.title}</h1>
        <h2>Project by Nawal Mubin</h2>
        <h3>Category: {data.category}</h3>
    <div className={styles.container}>
        <div className={styles.photo_container}>
            <img src={data.image_url} alt={data.title} />
        </div>
        <div className={styles.details_container}>
        <div className={styles.separator}>
            <h2>Campaign progress</h2>
            <hr className={styles.line}/>
        </div>
       
        <h3>End date: {data.end_date} </h3>
        <div className={styles.progress_container}>
        <CircularProgressbar value={goal_percent} text={`${goal_percent}% of goal met`} strokeWidth={7} styles={{ 
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
    <h3>Kshs<span style={{color: 'green'}}>{data.current_amount}</span></h3>
    <h4>Goal: Kshs<span style={{color: 'red', fontSize: '2rem'}}>{data.goal_amount}</span></h4>

    <div className={styles.pledge_amount}>
        <input type="number"  onChange={handleChange} name="amount" placeholder="Amount"/>  
    </div>

    <div className={styles.button} onClick={handleClick}>
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
        <h4><span style={{color: 'brown', fontSize: '1.5rem'}}>{data.description}</span></h4>
        
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