import styles from './TourCard.module.css'
import React, {useState} from 'react'


const TourCard = props => {

    let contentInfo = props.info;
    const [readMore, setReadMore] = useState(false);
    
    return (
        <div className={styles.container}>
            <div className={styles.card}>
            <img src={props.img} alt="Avatar" className={styles.image}/>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h4><b>{props.location}</b></h4>
                    <h4><b>{props.cost}</b></h4>
                </div>
                {readMore ? contentInfo : `${contentInfo.substring(0, 250)}...`}
                <button className={styles.ReadMoreShowLess} onClick={() => {setReadMore(!readMore)}}>{readMore ? 'Show Less' : 'Read More'}</button>
            </div>
            <div className={styles.notInterested}>
                <button className={styles.notInterestedBtn} onClick={props.removeTour}>Not Interested</button>
            </div>
        </div>
        </div>
        
    )
}

export default TourCard;