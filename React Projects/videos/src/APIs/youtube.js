import axios from 'axios';

const KEY = 'AIzaSyCWh0GzYuk8apL_XHdZhPDPNKoqCU1_ANc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: "video"
    }

});