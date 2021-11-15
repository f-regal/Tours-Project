import styles from './TourCard.module.css'
import React from 'react'


const TourCard = props => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
            <img src={props.img} alt="Avatar" className={styles.image}/>
            <div className={styles.container}>
                <h4><b>{props.location}</b></h4>
                <p>{props.info}</p>
            </div>
        </div>
        </div>
        
    )
}

export default TourCard;