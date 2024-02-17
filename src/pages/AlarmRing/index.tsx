import React from 'react';
import * as S from './style';

const AlarmRing = () => {
  return (
    <S.Container>
      <S.Square />
      <S.BottomContainer>
        <S.MyChat>
          <S.KakaoProfile src="/assets/kakao_profile.png" />
          <S.MyBox>
            <S.MyTitle>나</S.MyTitle>
            <S.ChattingBox src="/assets/chat.png" alt="" />
          </S.MyBox>
        </S.MyChat>
        <S.MessageBox>
          <S.MessageTitle>
            지금 일어나지 않으면 5분뒤에 카카오톡으로
            <br />
            "우빈"님에게 메세지가 전송되요!
          </S.MessageTitle>
          <S.MessageButton>일어나기</S.MessageButton>
        </S.MessageBox>
      </S.BottomContainer>
    </S.Container>
  );
};

export default AlarmRing;
