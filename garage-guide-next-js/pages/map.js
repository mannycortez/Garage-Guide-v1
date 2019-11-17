import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

function Map() {
    return <GoogleMap defaultZoom={ 10 } defaultCenter={{ lat: 37.774929, lng: -122.419418 }} />
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
    return (
    
    <div style ={{ width: '100vw', height: '100vh'}}>
        <WrappedMap 
        googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement = {<div style ={{ height: "100%" }}/>}
        containerElement = {<div style ={{ height: "100%" }}/>}
        mapElement = {<div style ={{ height: "100%" }}/>}
        />
    </div>
    );
}

