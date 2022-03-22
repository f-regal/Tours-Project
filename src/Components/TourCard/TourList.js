import React, {useState} from 'react'
import TourCard from './TourCard'; 

const TourList = props => {

    const TourData = props.information;
    console.log(TourData)
    const [tours, setTours] = useState(TourData)

    

    const removeTourHandler = (id) => {   
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

    return (
        <div>
            {tours.length < 1 ? 'No Tours Selected' : tours.map(tour => <TourCard id={tour.id} img={tour.imgSrc} location={tour.location} info={tour.information} cost={tour.price} removeTour={() => removeTourHandler(tour.id)} />) }
        </div>
    )
} 

export default TourList;