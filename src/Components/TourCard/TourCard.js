import styles from './TourCard.module.css'
import React from 'react'


const TourCard = props => {

    let content = props.info;
    let shorterContent = content.substring(0, 250);

    const showMore = () => {
        

    }

    let tooLong = true;
    let readMore = <a href="#" onClick={showMore}>ReadMore</a>;


    if (content.length <= 250) {
        tooLong = false;
    } else if (content.length > 251) {
        tooLong = true;
    }

    


    return (
        <div className={styles.container}>
            <div className={styles.card}>
            <img src={props.img} alt="Avatar" className={styles.image}/>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h4><b>{props.location}</b></h4>
                    <h4><b>{props.cost}</b></h4>
                </div>
                {tooLong = true && <p>{shorterContent}{readMore}</p>}
                {tooLong = false && <p>{content}</p>}
            </div>
        </div>
        </div>
        
    )
}

export default TourCard;