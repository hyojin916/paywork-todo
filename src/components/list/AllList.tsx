import React from 'react';
import styled from 'styled-components';
import FinishedList from './FinishedList';
import TodoList from './TodoList';

const AllList: React.FC = () => {
  return (
    <ListWrapper>
      <TodoList />
      <FinishedList />
    </ListWrapper>
  );
};

export default AllList;

const ListWrapper = styled.div`
  font-size: 20px;
  background-color: #ffffff94;
`;
