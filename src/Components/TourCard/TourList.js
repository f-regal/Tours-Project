//import styles from './TourCard.module.css'
import React from 'react'
import TourCard from './TourCard'; 

const TourList = props => {

    const TourData = props.information;
    console.log(TourData)

    const removeTourHandler = (id) => {
        TourData.forEach((tour) => {
            if (tour.id === id) {
                TourData.remove(tour)
            }
        }) 
    }

    return (
        <div>
            {TourData.map(tour => <TourCard id={tour.id} img={tour.imgSrc} location={tour.location} info={tour.information} cost={tour.price} removeTour={removeTourHandler} />)}
        </div>
    )
} 

export default TourList;