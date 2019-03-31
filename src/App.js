import React, { Component } from 'react'
import GMapView from './MapContainer'
import Slider from './Slider'
import * as VenueApi from './DataFetcher'
import './css/App.css'
import StoneModel from './CustomMarker/StoneModal'



class App extends Component {
    state = {
        venues: [],
        currentVenues: [],
        categories:[],
        currentVenue: {lat: 39.909264,
            lng: 116.397078},
        allVenues: [],
        isOpen: false,
        modalInfo: {
            isShow: false,
            title: '网络错误',
            description: '请稍后重试'
        }
    }
    filterPlace = (value) => {
        this.setState((state) => {
            return {
                isOpen: false,
                currentVenues: state.allVenues
                    .filter(ven => (ven.category.name === value || value === 'All'))
            }
        })
    }
    changeCurrentVenue = (venue) => {

        if(venue.pic && venue.pic !== './image/default.png') {
            this.setState({
                currentVenue: venue,
                isOpen: true
            })
            return
        }
        VenueApi.gotPicture(venue.id).then((res) => {
            venue.pic = res
            this.setState({
                currentVenue: venue,
                isOpen: true
            })
        }).catch((err) => {
            this.setState({
                currentVenue: venue,
                isOpen: true
            })
        })
    }
  render() {
    return (
      <div className="App">
          <div className="main_container">
              <StoneModel isOpen={this.state.modalInfo.isShow}
                          handleClose={()=>{
                              this.setState((state) => {
                                  state.modalInfo.isShow = false
                                  return {
                                      modalInfo: state.modalInfo
                                  }
                                  }
                              )
                          }}
                          info={{title:this.state.modalInfo.title,
                          description: this.state.modalInfo.description}}

              />
              <header><h1>Neighthorhood Map</h1></header>
              <div className="main_content">
                  <Slider opts={this.state.categories}
                          venues={this.state.currentVenues}
                          optChanged={this.filterPlace}
                          venueClick={this.changeCurrentVenue}
                  />
                  <GMapView
                      currentVenue={this.state.currentVenue}
                      changeMarker={this.changeCurrentVenue}
                      markers={this.state.currentVenues}
                      markerClick={this.changeCurrentVenue}
                      isOpen={this.state.isOpen}
                      closeInfoWindow={()=>{
                          this.setState({
                              isOpen: false
                          })
                      }}
                      /*center={
                          {
                              lat: this.state.currentVenue.lat,
                              lng: this.state.currentVenue.lng
                          }
                      }*/
                      zoom={16}
                  />
              </div>
              <footer><h1>thanks for your review</h1></footer>
          </div>
      </div>
    );
  }
  componentDidMount() {
        VenueApi.searchVenues().then(res => {
            let i_categories = res.map(item => item.category)
            let allCate = {
                name: 'All',
                id : 0,
            }
            i_categories = [allCate].concat(i_categories)
            let cates = []
            for(let i = 0; i < i_categories.length; i++){
                let isContain = false
                for(let j = 0; j < cates.length; j ++) {
                    if(i_categories[i].id === cates[j].id){
                        isContain = true
                        break
                    }
                }
                if(!isContain) {
                    cates.push(i_categories[i])
                }
            }
            this.setState({
                allVenues: res.map((ven) => {
                    ven.pic = './imgs/default.png'
                    return ven
                }),
                categories: cates,
                currentVenues: res
            })
        }).catch(err => {
            this.setState({
                modelInfo: {
                    title: '网络错误',
                    description: err,
                    isShow: true
                }
            })
        })
  }
}

export default App;
