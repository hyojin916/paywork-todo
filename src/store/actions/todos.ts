import { ADD, FINISHED, DELET } from '../actions/types';

/* 액션 생성함수 선언 */
let nextId = 1;

export const addTodo = (content: string) => ({
  type: ADD,
  todo: {
    id: nextId++,
    content,
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
