import { GET, ADD, FINISHED, DELET } from '../actions/types';
import { createDate } from '../../utils/createDate';

/* 액션 생성함수 선언 */
let nextId = 1;

export const getTodo = () => ({
  type: GET,
});

export const addTodo = (content: string) => ({
  type: ADD,
  todo: {
    id: nextId++,
    content,
    isCheck: false,
    createAt: createDate(),
  },
});

export const finishedTodo = (id: number) => ({
  type: FINISHED,
  id,
});

export const deletTodo = (id: number) => ({
  type: DELET,
  id,
});
