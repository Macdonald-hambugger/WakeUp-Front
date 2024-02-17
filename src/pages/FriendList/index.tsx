import React, { useEffect, useState } from 'react';
import * as S from './style';
import axios from 'axios';

const FriendList = () => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get('http://192.168.10.81:8080/loadfriends');
      console.log(res);
      // setFriendList(res.data);
      /*
        id
        profile_nickname
        profile_thumbnail_image
      */
    })();
  }, []);

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
        {friendList.map((data) => (
          <S.FriendListItem key={data.id}>
            <S.Profile src={data.profile_thumbnail_image} />
            <S.ProfileText>{data.profile_nickname}</S.ProfileText>
          </S.FriendListItem>
        ))}
      </S.Friends>
    </S.Container>
  );
};

export default FriendList;
