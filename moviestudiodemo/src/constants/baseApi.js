
export const BASE_URL = 'https://api.themoviedb.org/3';
export const BASE_IMAGE_PATH = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'

const API_KEY = 'e3d2ce2c1f9e908b6f00ac65c451181d';


const API = {
  /** trending movie list **/
  TRENDING_LIST: BASE_URL + '/trending/movie/day?api_key=' + API_KEY,
  TRENDING_ALL_LIST: BASE_URL + '/trending/tv/day?api_key=' + API_KEY,

  SEARCH_MOVIE: BASE_URL + '/search/movie?api_key=' + API_KEY + '&query=',

  CAST_DETAILS:'/credits?api_key=' + API_KEY,

  

};

export default API;
