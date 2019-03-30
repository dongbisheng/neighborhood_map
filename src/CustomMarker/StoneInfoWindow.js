import React, { Component } from 'react'
import PropTypes from 'prop-types'

const K_WIDTH = 300

export default class StoneInfoWindow extends Component {
    static propTypes = {
        img: PropTypes.string,
        text: PropTypes.string,
        venue: PropTypes.any,
        removeAction: PropTypes.func
    };
    style = {
        position: 'absolute',
        width: K_WIDTH,
        left: -10 / 2,
        top: -10 / 2,
        backgroundColor: '#3f51b5',
        color: '#fff',
    }
    render() {
        return (
            <div className="infowindow" style={this.style}>
                <button className="close_btn" onClick={this.props.removeAction}>关闭</button>
                <img alt={this.props.venue.name} src={this.props.venue.pic}/>
                <h2>{this.props.venue.name}</h2>
                <p>Address: {this.props.venue.address}</p>
            </div>
        )
    }
}
