import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoType } from '../../utils/types';

interface paramProps {
  item: TodoType;
  onFinish: (id: number) => void;
  onDelet: (id: number) => void;
}

const TodoItem: React.FC<paramProps> = ({ item, onFinish, onDelet }: paramProps) => {
  const [finish, setFinish] = useState<boolean>(false);

  const isChecked = (): void => {
    onFinish(item.id);
    setFinish(!finish);
  };

  return (
    <ItemBox>
      <TodoName>{item.content}</TodoName>
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
  margin: auto;
  margin-bottom: 2px;
  padding: 10px 5px;
  width: 500px;
  height: 53px;
  font-size: 19px;
  background-color: white;
  border-radius: 5px;
`;

const TodoName = styled.div`
  width: 75%;
  margin-right: 10px;
  margin-left: 4px;
`;

const DeletBtn = styled.button`
  border: none;
`;
