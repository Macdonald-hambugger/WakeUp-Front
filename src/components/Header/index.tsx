import React from 'react';
import * as S from './style';

const Header = () => {
  return (
    <S.Container>
      <S.Logo src="/assets/logo.svg" alt="logo" />
      <S.ToolBox>
        <S.Tool src="/assets/plus.svg" alt="plus" />
        <S.Tool src="/assets/more.svg" alt="more" />
      </S.ToolBox>
    </S.Container>
  );
};

export default Header;
