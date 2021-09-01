import React, { useState } from 'react';
import styled from 'styled-components';

const AddTodo: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');

  const getInputText: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const inputValue = e.target.value;
    setInputText(inputValue);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setInputText('');
  };

  return (
    <InputBox onSubmit={addTodo} action="addTodo">
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
