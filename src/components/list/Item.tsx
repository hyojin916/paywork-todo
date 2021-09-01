import React from 'react';
import styled from 'styled-components';

const Item = () => {
  return (
    <ItemBox>
      <Check></Check>
      <TodoName>Todo 완료</TodoName>
      <div>⭐️</div>
      <DeletBtn value="delet">🗑</DeletBtn>
    </ItemBox>
  );
};

export default Item;

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 10px;
  font-size: 25px;
  background-color: white;
  border-radius: 8px;
`;

const Check = styled.div`
  width: 25px;
  height: 25px;
  background-color: navy;
  border-radius: 50%;
  margin: 0px 10px;
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
