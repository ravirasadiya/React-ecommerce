import { userActions } from './user.type';

export const setCurrentUser = (user) => ({
  type: userActions.SET_CURRENT_USER,
  payload: user,
});
