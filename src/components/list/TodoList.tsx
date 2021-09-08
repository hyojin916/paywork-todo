import React from 'react';
import styled from 'styled-components';
import { TodoType } from '../../store/reducers/todos';
import TodoItem from './TodoItem';

interface paramProps {
  todo: TodoType[];
  onDelet: (id: number) => void;
  onFinish: (id: number) => void;
}

const TodoList: React.FC<paramProps> = ({ todo, onFinish, onDelet }) => {
  return (
    <Todo>
      {todo.map((item: TodoType) => (
        <TodoItem key={item.id} item={item} onFinish={onFinish} onDelet={onDelet} />
      ))}
    </Todo>
  );
};

export default TodoList;

const Todo = styled.ul`
  margin-bottom: 30px;
`;
