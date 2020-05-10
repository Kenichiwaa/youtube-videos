import axios from 'axios';

const KEY = 'AIzaSyAM7PUONBJYrgDIEvCIAYmnUNMrnnD-7bI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',

});