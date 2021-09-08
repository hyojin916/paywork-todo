import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoType } from '../../store/reducers/todos';

interface paramProps {
  todo: TodoType[];
  onCreate: (content: string) => void;
}

const AddTodo: React.FC<paramProps> = ({ onCreate }) => {
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
      <Submit type="submit">+</Submit>
    </InputBox>
  );
};

export default AddTodo;

const InputBox = styled.form`
  width: 500px;
  padding: 10px;
  position: relative;
  background-color: #000000ab;
  border-radius: 4px;
`;

const Input = styled.input`
  border-radius: 5px;
  width: 100%;
  outline: none;
  font-size: 20px;
  padding-left: 35px;
  padding-top: 4px;
  background: none;
  border: none;
  &::placeholder {
    color: white;
    font-size: 17px;
  }
  &:focus {
    color: white;
  }
`;

const Submit = styled.button`
  position: absolute;
  top: 7px;
  left: 10px;
  border: none;
  background: none;
  font-size: 30px;
`;
