import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.chucknorris.io/'
  });
  
const api = {
    getRandomJoke: () => instance.get('jokes/random'),
}

export default api;
