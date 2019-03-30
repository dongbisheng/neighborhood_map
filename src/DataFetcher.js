/*Client ID
IVOL1JXELL10TVFCOXW54ZEUMP4V4D1NXUGW1WDQCTBDSDL2
Client Secret
42EN0J45BXQFNNV1MY4QMBR0EENI3Y1MHH5B3WFDI3I1VYLY*/

function encodeParams(obj) {
    const params = []
    Object.keys(obj).forEach((key) => {
        let value = obj[key]
        if (typeof value === 'undefined') {
            value = ''
        }
        params.push([key,encodeURIComponent(value)].join('='))
    })
    return params.join('&')
}

const client_id = 'IVOL1JXELL10TVFCOXW54ZEUMP4V4D1NXUGW1WDQCTBDSDL2'
const client_secret = '42EN0J45BXQFNNV1MY4QMBR0EENI3Y1MHH5B3WFDI3I1VYLY'
const search_url = 'https://api.foursquare.com/v2/venues/explore'
const searchVenuesParams = {
    ll: '39.909264, 116.397078',
    client_id: client_id,
    client_secret: client_secret,
    v: '20190101',
    radius: '800'
}
export const searchVenues = () =>
    fetch(`${search_url}?${encodeParams(searchVenuesParams)}`)
        .then(res => res.json())
        .then(res => res.response)
        .then( res => res.groups[0].items.map(item => item.venue))
        .then(res => {
            return res.map(item => {
                let cate = item.categories[0]
                    return {
                        name: item.name,
                        id: item.id,
                        address: item.location.address,
                        lat: item.location.lat,
                        lng: item.location.lng,
                        city: item.location.city,
                        state: item.location.state,
                        country: item.location.country,
                        category: {
                            id: cate.id,
                            name: cate.name,
                        }
                    }
            })
        })

const pictureParams = {
    client_id: client_id,
    client_secret: client_secret,
    v: '20190101'
}
export const gotPicture = (venue_id,width=100,height=100) =>
    fetch(`https://api.foursquare.com/v2/venues/${venue_id}/photos?${encodeParams(pictureParams)}`)
        .then(res => res.json())
        .then(res => res.response.photos.items[0])
        .then(res => `${res.prefix}${width}x${height}${res.suffix}`)
