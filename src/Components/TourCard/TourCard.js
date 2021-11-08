import styles from './TourCard.module.css'
import Logo from './img_avatar.png'
import React from 'react'

const TourCard = props => {
    return (
        <div className={styles.card}>
            <img src={Logo} alt="Avatar" className={styles.image}/>
            <div className={styles.container}>
                <h4><b>John Doe</b></h4>
                <p>ArchitectEngineer</p>
            </div>
        </div>
    )
}

export default TourCard;