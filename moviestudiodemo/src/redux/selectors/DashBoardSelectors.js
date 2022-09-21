export const getTrandingMovies = (state) => {
  return Object.keys(state.dashBoard).length > 0 ? state.dashBoard?.trandingMoviesList : [];
};


export const getTrandingAll = (state) => {
  return state.dashBoard?.trandingAllList ?? [];
};

