import React from 'react'
import Posts from '../post/Posts'
import { GoogleMap, 
         withScriptjs, 
         withGoogleMap 
          } from "react-google-maps"


const Home = () => (
    <div>
    <div className = "jumbotron"
         style = {{textAlign: 'center'}}>
        <h1>Garage Guide</h1>
        <p>Your guide to the best automotive services in your area.</p>
    </div>
    
    <div style={{width: '100vw', height: '100vh'}}>
        <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style = {{ height: "100%"}} />}
            containerElement={<div style = {{ height: "100%"}} />}
            mapElement={<div style = {{ height: "100%"}} />} 
        />
    </div>

    <div className = "container">
        <Posts />
    </div>
    <br />
    <hr />
    
    </div>
);



function Map() {
    return (
    
    <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 33.748997, lng: -84.387985}} >

    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default Home;

