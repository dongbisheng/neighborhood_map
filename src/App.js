import React, { Component } from 'react';
import GMapView from './MapContainer'
import Slider from './Slider'
import './css/App.css'

class App extends Component {
    state = {
        markers: []
    }
  render() {
    return (
      <div className="App">
          <div className="main_container">
              <header><h1>Neighthorhood Map</h1></header>
              <div className="main_content">
                  <Slider

                  />
                  <GMapView/>
              </div>
              <footer><h1>thanks for your review</h1></footer>
          </div>
      </div>
    );
  }
}



export default App;
