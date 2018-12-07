import axios from 'axios';

const KEY = 'AIzaSyCC9o6HJgARuaYop8PkGwYexQrRUy0BHUs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});