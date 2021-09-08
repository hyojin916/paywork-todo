import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, finishedTodo, deletTodo } from '../../store/actions/todos';
import styled from 'styled-components';

import TodoList from './TodoList';
import AddTodo from '../addTodo/AddTodo';
import { TodoType } from '../../utils/types';

const TodosContainer: React.FC = () => {
  const todos: TodoType[] = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  console.log(`todos: ${todos}`);
  const onCreate = useCallback((constent: string) => dispatch(addTodo(constent)), [dispatch]);
  const onFinish = useCallback((id: number) => dispatch(finishedTodo(id)), [dispatch]);
  const onDelet = useCallback((id: number) => dispatch(deletTodo(id)), [dispatch]);

  return (
    <ListWrapper>
      <AddTodo todo={todos} onCreate={onCreate} />
      <TodoList todo={todos} onFinish={onFinish} onDelet={onDelet} />
    </ListWrapper>
  );
};

export default TodosContainer;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;
