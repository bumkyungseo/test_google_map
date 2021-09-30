import React, { Fragment, useState } from "react";
import Map from "./Map";
import SearchBar from "./SearchBar";


const MapPage = () => {
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

export default MapPage;