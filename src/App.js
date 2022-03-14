import './App.css';
import TourList from './Components/TourCard/TourList';
import Logo from './Components/TourCard/istanbul.jpg'
import Logo1 from './Components/TourCard/dubainew.jpg'
import Logo2 from './Components/TourCard/barbados.jpg'

const TourLocations = 
  [
    {
      id: 1,
      location: 'Barbados',
      price: '£2950',
      information: 'Barbados is an eastern Caribbean island and an independent British Commonwealth nation. Bridgetown, the capital, is a cruise-ship port with colonial buildings and Nidhe Israel, a synagogue founded in 1654. Around the island are beaches, botanical gardens, the Harrison’s Cave formation, and 17th-century plantation houses like St. Nicholas Abbey. Local traditions include afternoon tea and cricket, the national sport.',
      imgSrc: Logo2,
    },
    {
      id: 2,
      location: 'Dubai',
      price: '£3950',
      information: 'As Dubai continues to drive global tourism recovery, Dubai’s Department of Tourism and Commerce Marketing (Dubai Tourism) has revealed that the city welcomed 2.85 million international overnight visitors from January -July 2021, further accelerating momentum in this landmark year of Expo 2020 and the UAE Golden Jubilee. The latest industry data was released, as Dubai Tourism launched the third cinematic trailer of its global campaign, Dubai Presents.',
      imgSrc: Logo1,
    },
    {
      id: 3,
      location: 'Istanbul',
      price: '£4950',
      information: 'Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here. In the Sultanahmet district, the open-air, Roman-era Hippodrome was for centuries the site of chariot races, and Egyptian obelisks also remain. The iconic Byzantine Hagia Sophia features a soaring 6th-century dome and rare Christian mosaics.',
      imgSrc: Logo,
    },
  ]


function App() {
  return (
    <div className="App">
      <h1>Our Tours</h1>
      <TourList information={TourLocations} />
    </div>
  );
}

export default App;
