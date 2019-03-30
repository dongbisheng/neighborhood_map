import React, { Component } from 'react'
import PropType from 'prop-types'

class Slider extends Component {
    static propTypes = {
        title: PropType.string,
        opts: PropType.any,
        venues: PropType.any,
        optChanged: PropType.func,
        venueClick: PropType.func
    }
    static defaultProps = {
        title: "",
        opts: [],
        venues: []
    }
    render() {
        return (
            <div className="slider_div">
                <p>{this.props.title}</p>
                <select role="listbox" aria-label="category-filter" onChange={(e)=>{this.props.optChanged(e.target.value)}}>
                    {
                        this.props.opts.map(opt => (
                            <option key={opt.id}

                            >{opt.name}</option>
                        ))
                    }
                </select>
                <ul>
                    { this.props.venues.map(venue => (
                        <li onClick={()=>{this.props.venueClick(venue)}}
                            key={venue.id}>{venue.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
    style = {

    }
}

export default Slider
