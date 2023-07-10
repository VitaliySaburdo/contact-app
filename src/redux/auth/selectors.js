export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user.name;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectLoading = state => state.auth.loading;

const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectLoading,
};

export default authSelectors;
