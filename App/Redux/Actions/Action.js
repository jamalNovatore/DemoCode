import axios from 'axios';

// Define action types
export const GET_HEROES = 'FETCH_HEROES';

// Construct a BASE URL for API endpoint
const BASE_URL = `https://my-json-server.typicode.com/Isaacmeedinaa/dc-superheroes/superheroes`;

export const getHeroes = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}`);
      if (res.data) {

        dispatch({
          type: GET_HEROES,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    // Add custom logic to handle errors
  }
};
