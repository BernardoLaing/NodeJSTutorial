const request = require('request');
const key = "AIzaSyDGKi4sypdjxkn0P1dfRRr_n0Y-Tz_H98g";
request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyDGKi4sypdjxkn0P1dfRRr_n0Y-Tz_H98g',
  json:true
}, (error, response, body) => {
  console.log(`Addres: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
