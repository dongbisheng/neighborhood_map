import React, { Component } from 'react'
import './css/Slider.css'

class Slider extends Component {
    render() {
        return (
            <div className="slider_div">
                <p>选择区域</p>
                <select>
                    <option>hello</option>
                    <option>world</option>
                    <option>huhu</option>
                    <option>hahah</option>
                </select>
                <ul>
                    <li>first place</li>
                    <li>first place</li>
                    <li>first place</li>
                    <li>first place</li>
                </ul>
            </div>
        )
    }
    style = {

    }
}

export default Slider