import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoType } from '../../store/reducers/todos';

interface paramProps {
  todo: TodoType[];
  onCreate: (content: string) => void;
}

const AddTodo: React.FC<paramProps> = ({ todo, onCreate }) => {
  const [text, setText] = useState<string>('');

  const getText: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const inputValue = e.target.value;
    setText(inputValue);
  };

  const submitTodo: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>,
  ): void => {
    e.preventDefault();
    onCreate(text);
    setText('');
  };

  return (
    <InputBox onSubmit={submitTodo} action="addTodo">
      <Input value={text} onChange={getText} type="text" placeholder="작업 추가" required />
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
