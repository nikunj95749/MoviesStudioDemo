import { TYPES } from '@/redux/actions/DashBoardActions';

const defaultState = {
  trandingMoviesList: [],
  trandingAllList: [],
};
export const dashBoardReducer = (state = defaultState, { payload, type }) => {
  switch (type) {
    case TYPES.TRANDING_MOVIES_LIST:
      return { ...state, trandingMoviesList: payload };

    case TYPES.TRANDING_ALL_LIST:
      console.log('payload=====ddd ',payload);
      return { ...state, trandingAllList: payload };
    default:
      return state;
  }
};
