import { combineReducers } from 'redux';
import editTodo from './editTodo';

const rootReducer = combineReducers({
  editTodo,
});

export default rootReducer;
