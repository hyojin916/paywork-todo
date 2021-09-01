import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return <Head>Todo List</Head>;
};

export default Header;

const Head = styled.div`
  font-size: 40px;
  margin-bottom: 30px;
`;
