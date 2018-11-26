import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID 6d1b671f37f8f144af4eddaf20ce64b0bff5d155c43a5b2db940e0e8206acd30"
  }
});