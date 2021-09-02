import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TodoType } from '../../utils/types';
import { getLocalStorage, setTodoId } from '../../utils/localStorage';

const AddTodo: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [inputText, setInputText] = useState<string>('');

  useEffect(() => {
    const todos = getLocalStorage();
    setTodoList(todos);
  }, []);

  const getInputText: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const inputValue = e.target.value;
    setInputText(inputValue);
  };

  const submitTodo: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>,
  ): void => {
    e.preventDefault();

    // dispatch로 작동하도록 바꾸기
    const _id = setTodoId();

    const newTodo = {
      id: _id,
      content: inputText,
      isCheck: false,
      createAt: 20210902,
    };

    setInputText('');
  };

  return (
    <InputBox onSubmit={submitTodo} action="addTodo">
      <Input
        required
        onChange={getInputText}
        value={inputText}
        type="text"
        placeholder="작업 추가"
      />
      <Submit type="submit">Add</Submit>
    </InputBox>
  );
};

export default AddTodo;

const InputBox = styled.form`
  display: flex;
  margin-top: 50px;
  background-color: #00000028;
`;

const Input = styled.input`
  width: 450px;
  height: 55px;
  border-radius: 5px;
  outline: none;
  font-size: 20px;
  padding-left: 30px;
  margin-right: 20px;
`;

const Submit = styled.button`
  width: auto;
  text-align: center;
`;
