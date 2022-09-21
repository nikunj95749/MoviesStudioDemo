import { combineReducers } from 'redux';
import { errorReducer } from '@/redux/reducers/ErrorReducer';
import { statusReducer } from '@/redux/reducers/StatusReducer';
import { userReducer } from '@/redux/reducers/UserReducer';
import { dashBoardReducer } from '@/redux/reducers/DashBoardReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  status: statusReducer,
  user: userReducer,
  dashBoard: dashBoardReducer,
});
