import axios from 'axios';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`

  // this returns a promise
  const request = axios.get(url);

  // redux promise: if payload is promise, stops action entirely, once request finishes, dispatches action with same type, but payload as response
  // redux promise resolves promise for you
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
