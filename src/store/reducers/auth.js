import { 
  HANDLE_CHANGE_AUTH, 
} from 'store/actions/types';

const authReducer = (state = false, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_AUTH:
      return action.payload.isLoggedIn;
    default:
      return state;
  }
};

export default authReducer;
