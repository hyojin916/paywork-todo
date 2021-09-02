import { SET, ADD, DELET, FINISHED } from '../actions/types';
import { TodoType } from '../../utils/types';
import { setTodoId } from '../../utils/localStorage';

const INITIAL_STATE = {
  todoList: [],
  counter: 0,
  text: '',
};

export default function editTodo(state: TodoType[], action: any) {
  switch (action.type) {
    case SET:
      return {
        ...state,
        todos: [],
      };
    case ADD:
      return {
        ...state,
        list: state.concat(action.item),
      };
    case FINISHED:
      return {
        ...state,
        isCheck: true,
      };

    default:
      return state;
  }
}
