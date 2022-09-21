import { callApiGet } from './baseApi';
import API, { BASE_URL } from '../../constants/baseApi';

export const getTrendingListData = () => callApiGet({ url: API.TRENDING_LIST });

export const getTrendingAllListData = () => callApiGet({ url: API.TRENDING_ALL_LIST });

export const getSearchMovieData = (data = '') => callApiGet({ url: API.SEARCH_MOVIE + data});


export const getCastData = (mediaType = '', id = '') =>
  callApiGet({ url: BASE_URL + `/${mediaType}/` + id + API.CAST_DETAILS });
