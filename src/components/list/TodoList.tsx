import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { TodoType } from '../../store/reducers/todos';
// import FinishedList from './FinishedList';
import TodoItem from './TodoItem';

interface paramProps {
  // children: React.ReactNode;
  todo: TodoType[];

  onFinish: (id: number) => void;
}

const TodoList: React.FC<paramProps> = ({ todo, onFinish }) => {
  return (
    <Todo>
      {todo.map(item => (
        <TodoItem key={item.id} item={item} onFinish={onFinish} />
      ))}
      {/* <FinishedList /> */}
    </Todo>
  );
};

export default TodoList;

const Todo = styled.ul`
  margin-bottom: 30px;
`;
