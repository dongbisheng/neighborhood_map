import React, { Component } from 'react'
import PropTypes from 'prop-types'

const K_WIDTH = 10
const K_HEIGHT = 10

export default class StoneMarker extends Component {
    static propTypes = {
        clickAction: PropTypes.func
    };
    style = {
        position: 'absolute',
        width: K_WIDTH,
        height: K_HEIGHT,
        left: -K_WIDTH / 2,
        top: -K_HEIGHT / 2,

        border: '2px solid #f44336',
        borderRadius: K_HEIGHT,
        backgroundColor: 'white',
        textAlign: 'center',
        color: '#3f51b5',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 4
    }
    static defaultProps = {};

    render() {
        return (
            <div onClick={() => {this.props.clickAction()}}
                 style={this.style}></div>
        )
    }
}
