import { SET, ADD, DELET, FINISHED } from './types';

// action 생성함수 & 액션

export const setTodo = () => {
  return { type: SET };
};

export const addTodo = () => {
  return {
    type: ADD,
  };
};

export const deletTodo = () => {
  return { type: DELET };
};

export const finishedTodo = () => {
  return { type: FINISHED };
};
