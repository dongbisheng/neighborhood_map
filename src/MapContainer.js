import GoogleMapReact from 'google-map-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StoneMarker from './CustomMarker/StoneMarker'
import StoneInfoWindow from './CustomMarker/StoneInfoWindow'

class GMapView extends Component {

    static defaultProps = {
        center: {
            lat: 39.909264,
            lng: 116.397078
        },
        zoom: 16,
        markers: []
    }
    static propTypes = {
        center: PropTypes.any,
        zoom: PropTypes.number,
        markers: PropTypes.any,
        currentVenue: PropTypes.any,
        changeMarker: PropTypes.func,
        isOpen: PropTypes.bool,
        markerClick: PropTypes.func,
        closeInfoWindow: PropTypes.func
    }
    render() {
        return (
            <div className="map_container">
                <GoogleMapReact role="application"
                    bootstrapURLKeys={{key: 'AIzaSyCGRa-Ci6KruzoT1TJ18A60La_z_YkCk0g'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {
                        this.props.markers.map(marker => (
                            <StoneMarker
                                role="map_marker"
                                clickAction={()=>{ this.props.changeMarker(marker)

                                }}
                                key={marker.id}
                                lat={marker.lat}
                                lng={marker.lng}
                            />
                        ))
                    }
                    {
                        this.props.isOpen &&
                             <StoneInfoWindow
                                 removeAction={(e)=>{
                                     e.preventDefault()
                                     this.props.closeInfoWindow()
                                 }}
                                 venue={this.props.currentVenue}
                                 lat={this.props.currentVenue.lat}
                                 lng={this.props.currentVenue.lng}
                            />
                    }

                </GoogleMapReact>
            </div>
        )
    }
}

export default GMapView
