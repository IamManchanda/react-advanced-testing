import { combineReducers } from 'redux';
import commentsReducer from 'store/reducers/comments';
import authReducer from 'store/reducers/auth';

const [comments, auth] = [commentsReducer, authReducer];
const reducers = combineReducers({ comments, auth });

export default reducers;
