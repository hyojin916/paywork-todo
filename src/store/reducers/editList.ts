import { SET, ADD, DELET, FINISHED } from '../actions/types';
import { TodoType } from '../../utils/types';

const INITIAL_STATE = {
  todoList: [],
};

export default function editTodo(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case SET:
      return {
        ...state,
        todos: [],
      };

    default:
      return state;
  }
}
