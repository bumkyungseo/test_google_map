import React, { Fragment } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const MY_KEY = "AIzaSyAEPRU-Zb3oXbl8flKWJppEU2-PUUlwCWI"
const GoogleMap = ({ google, latitude, longitude }) => {
  return (
    <Fragment>
      <Map
        style={{width:"50%", height :"50%"}}
        google={google}
        zoom={17}
        initialCenter={{lat: 37.486999, lng: 127.046852}}
        center={{lat : latitude, lng : longitude}}
      />
    </Fragment>
  )
}

export default GoogleApiWrapper({
  apiKey: MY_KEY,
}) (GoogleMap)