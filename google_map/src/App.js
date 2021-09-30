import { Fragment, useState } from 'react';
import './App.css';
import Map from './Map';
import SearchBar from './SearchBar';

function App() {
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  return (
    <Fragment>
      <SearchBar 
        setLatitude={setLatitude}
        setLongitude={setLongitude} 
      />
      <Map 
        latitude={latitude}
        longitude={longitude}
      />
    </Fragment>
  );
}

export default App;
