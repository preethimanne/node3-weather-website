const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a3359fa0072291972ab4820216368cc9&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            console.log(body.error)
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')

        }
    
    })

}

module.exports = forecast