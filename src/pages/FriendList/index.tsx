import React from 'react';
import * as S from './style';

const FriendList = () => {
  return (
    <S.Container>
      <S.Header>
        <S.ToolBox>
          <S.CancelText>취소</S.CancelText>
        </S.ToolBox>
      </S.Header>
      <S.SearchBox>
        <S.SearchInput placeholder="어떤 분을 찾고 계시나요?" />
        <S.SearchLogo src="/assets/search.svg" />
      </S.SearchBox>
      <S.Friends>
        {Array.from({ length: 20 }).map((_, i) => (
          <S.FriendListItem key={i}>
            <S.Profile src="/assets/profile.png" />
            <S.ProfileText>김교수</S.ProfileText>
          </S.FriendListItem>
        ))}
      </S.Friends>
    </S.Container>
  );
};

export default FriendList;
