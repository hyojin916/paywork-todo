import { ADD, FINISHED, DELET } from '../actions/types';

export interface TodoType {
  id: number;
  content: string;
  isCheck: boolean;
  createAt: number;
}

// 타입 틀리지말자 진짜ㅡㅡ
const initialState: TodoType[] = [
  // {
  //   id: 1,
  //   content: '',
  //   isCheck: false,
  //   createAt: 0,
  // },
];

export default function todos(state = initialState, action: any) {
  switch (action.type) {
    case ADD:
      return state.concat(action.todo);
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
