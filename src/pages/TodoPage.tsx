import React from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import TodosContainer from '../components/list/TodosContainer';

const TodoPage: React.FC = () => {
  return (
    <Template>
      <Header />
      <TodosContainer />
    </Template>
  );
};

export default TodoPage;

const Template = styled.div`
  margin: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  height: 800px;
  /* background-color: #00000018; */
  border-radius: 14px;
`;
