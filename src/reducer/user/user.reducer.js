import { userActions } from './user.type';

const INITILIZE_STATE = {
  currentUser: null,
};

const userReducer = (state = INITILIZE_STATE, action) => {
  switch (action.type) {
    case userActions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
