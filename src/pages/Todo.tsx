import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AddTodo from '../components/addTodo/AddTodo';
import Header from '../components/header/Header';
import AllList from '../components/list/AllList';

const Todo: React.FC = () => {
  return (
    <Template>
      <Header />
      <AllList />
      <AddTodo />
    </Template>
  );
};

export default Todo;

const Template = styled.div`
  margin: auto;
  margin-top: 100px;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
`;
