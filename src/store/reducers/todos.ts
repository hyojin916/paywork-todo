import { ADD, FINISHED, DELET, GET } from '../actions/types';

export interface TodoType {
  id: number;
  content: string;
  isCheck: boolean;
  createAt: number;
}

const initialState: TodoType[] = [];

export default function todos(state = initialState, action: any) {
  switch (action.type) {
    case GET:
      return [...state];
    case ADD:
      return [...state, action.todo];
    case FINISHED:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, isCheck: !todo.isCheck } : todo,
      );
    case DELET:
      return state.filter((todo: TodoType) => todo.id !== action.id);
    default:
      return state;
  }
}
