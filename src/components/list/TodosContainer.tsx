import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, finishedTodo } from '../../store/actions/todos';

import styled from 'styled-components';

import TodoList from './TodoList';
import AddTodo from '../addTodo/AddTodo';
import { TodoType } from '../../utils/types';

const TodosContainer: React.FC = () => {
  const todos: TodoType[] = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<TodoType[]>([]);

  useEffect(() => {
    setTodo(todos);
  }, []);

  const onCreate = (constent: string) => dispatch(addTodo(constent));
  const onFinish = useCallback((id: number) => dispatch(finishedTodo(id)), [dispatch]);

  return (
    <>
      <ListWrapper>
        <TodoList todo={todo} onFinish={onFinish} />
        <AddTodo todo={todo} onCreate={onCreate} />
      </ListWrapper>
    </>
  );
};

export default TodosContainer;

const ListWrapper = styled.div`
  font-size: 20px;
  background-color: #ffffff94;
`;
