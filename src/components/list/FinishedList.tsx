import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const FinishedList: React.FC = () => {
  return (
    <Finished>
      <Item />
      <Item />
      <Item />
    </Finished>
  );
};

export default FinishedList;

const Finished = styled.div`
  background-color: #b61717;
`;
