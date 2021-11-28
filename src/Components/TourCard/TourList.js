//import styles from './TourCard.module.css'
import React from 'react'
import TourCard from './TourCard'; 

const TourList = props => {

    const TourData = props.information;
    console.log(TourData)

    return (
        <div>
            {TourData.map(tour => <TourCard img={tour.imgSrc} location={tour.location} info={tour.information} cost={tour.price} />)}
        </div>
    )
} 

export default TourList;