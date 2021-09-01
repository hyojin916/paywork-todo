import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const TodoList: React.FC = () => {
  return (
    <Todos>
      {/* map 돌려서 Item 나오게 */}
      <Item />
      <Item />
    </Todos>
  );
};

export default TodoList;

const Todos = styled.div`
  margin-bottom: 30px;
`;
