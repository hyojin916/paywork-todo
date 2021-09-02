import { SET, ADD, DELET, FINISHED, CHANGE_TEXT } from './types';
import { TodoType } from '../../utils/types';

// action 생성함수 & 액션

export const setTodo = () => {
  return { type: SET };
};

export const addTodo = (item: string) => {
  return {
    type: ADD,
    item,
  };
};

export const deletTodo = () => {
  return {
    type: DELET,
  };
};

export const finishedTodo = () => {
  return {
    type: FINISHED,
  };
};

export const changeText = (text: string) => ({
  type: CHANGE_TEXT,
  text,
});
