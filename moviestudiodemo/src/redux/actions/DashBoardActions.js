
export const TYPES = {
  TRANDING_MOVIES_LIST: 'TRANDING_MOVIES_LIST',
  TRANDING_ALL_LIST: 'TRANDING_ALL_LIST',
};

export const trandingMoviesSuccess = (data) => ({
  type: TYPES.TRANDING_MOVIES_LIST,
  payload: data,
});

export const trandingAllSuccess = (data) => ({
  type: TYPES.TRANDING_ALL_LIST,
  payload: data,
});

