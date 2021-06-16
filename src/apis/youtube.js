import axios from 'axios';

const { REACT_APP_YOUTUBE_API_KEY } = process.env;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: REACT_APP_YOUTUBE_API_KEY
    }
})