import GoogleMapReact from 'google-map-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './css/MapContainer.css'

const AnyReactComponent = ({ text }) => {
    return <div style={{
        color: 'white',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>{text}</div>
}

class GMapView extends Component {

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11,
        markers: []
    }
    static propTypes = {
        onCenterChange: PropTypes.func,
        onZoomChange: PropTypes.func,
        onBoundsChange: PropTypes.func,
        onMarkerHover: PropTypes.func,
        onChildClick: PropTypes.func,
        center: PropTypes.any,
        zoom: PropTypes.number,
        markers: PropTypes.any,

    }

    render() {
        return (
            <div style={{height: '100vh', width: '100vw'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyCGRa-Ci6KruzoT1TJ18A60La_z_YkCk0g'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {
                        this.props.markers.map(marker => (
                            <AnyReactComponent
                              lat={marker.lat}
                              lng={marker.lng}
                              text={marker.text}
                            />
                        ))
                    }
                </GoogleMapReact>
            </div>
        )
    }
}

export default GMapView

