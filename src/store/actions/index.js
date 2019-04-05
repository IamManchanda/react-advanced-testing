import axios from 'axios';

import { 
  HANDLE_SAVE_COMMENT,
  HANDLE_FETCH_COMMENTS,
  HANDLE_CHANGE_AUTH,
} from 'store/actions/types';

export const handleSaveComment = (comment) => ({
  type: HANDLE_SAVE_COMMENT,
  payload: { comment },
});

export const handleFetchComments = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
  return {
    type: HANDLE_FETCH_COMMENTS,
    payload: { response },
  };
};

export const handleChangeAuth = (isLoggedIn) => ({
  type: HANDLE_CHANGE_AUTH,
  payload: { isLoggedIn },
});
