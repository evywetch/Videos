// To be able to use axios, make sure that u install it using NPM (npm install --save axios)
import axios from 'axios';
const KEY = 'AIzaSyCJlUpIdae1F1RfBGL7ErpPfg_RyGH8QJg';

/* 
=> Create a pre-configured instance of Axios that already has a based URL and some default parameters 
=> Adding type = 'video' Coz At some point in the course you may end up getting Warning: Each child in a list should have a unique "key" prop even after we add a key prop in the "Fixing a Few Warnings" lecture. To ensure that this is not an issue, we should add a type parameter to our axios config object to only search for videos and not playlists.


*/
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
  },
});
