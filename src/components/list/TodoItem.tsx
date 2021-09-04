import React from 'react';
import styled from 'styled-components';
import { TodoType } from '../../utils/types';

interface paramProps {
  item: TodoType;
  onFinish: (id: number) => void;
  onDelet: (id: number) => void;
}

const TodoItem: React.FC<paramProps> = ({ item, onFinish, onDelet }: paramProps) => {
  return (
    <ItemBox>
      <TodoName>{item.content}</TodoName>
      <div onClick={() => onFinish(item.id)}>완료</div>
      <button>⭐️</button>
      <DeletBtn onClick={() => onDelet(item.id)} value="delet">
        🗑
      </DeletBtn>
    </ItemBox>
  );
};

export default TodoItem;

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 10px;
  font-size: 25px;
  background-color: white;
  border-radius: 8px;
`;

const TodoName = styled.div`
  padding-right: 300px;
  margin-right: 10px;
`;

const DeletBtn = styled.button`
  background: none;
  border: none;
  padding: 0px 20px;
`;
