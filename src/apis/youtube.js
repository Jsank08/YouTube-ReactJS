import axios from 'axios';
const KEY = 'AIzaSyAOdvhyza7xvaPSO07GHcPl1SUu4gifjfs'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})