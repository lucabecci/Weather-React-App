import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'a35bd1523925859509739f49904b1a93';
 export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });
    return data
}