import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Logo src="/assets/logo.svg" alt="logo" />
      <S.ToolBox>
        <S.Tool
          src="/assets/plus.svg"
          alt="plus"
          onClick={() => navigate('/alarm/add')}
        />
        <S.Tool src="/assets/more.svg" alt="more" />
      </S.ToolBox>
    </S.Container>
  );
};

export default Header;

const StyledModal = styled.div``;
