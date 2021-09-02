import { TodoType } from './types';

// 옮기기
export const STORAGE_KEY: string = 'todos';

export const saveLocalStorage = (
  storageItem: TodoType[],
  storageKey: string = STORAGE_KEY,
): void => {
  const stringTodo = JSON.stringify(storageItem);
  localStorage.setItem(storageKey, stringTodo);
};

export const getLocalStorage = (storageKey: string = STORAGE_KEY): TodoType[] => {
  const storageItem = localStorage.getItem(storageKey);
  if (storageItem === null) return [];

  return JSON.parse(storageItem);
};

export const setTodoId = (storageKey: string = STORAGE_KEY): number => {
  const lastTodo = getLocalStorage(storageKey);
  if (!lastTodo.length) {
    return 1;
  } else {
    const lastTodoId = lastTodo[lastTodo.length - 1].id;
    return lastTodoId + 1;
  }
};
