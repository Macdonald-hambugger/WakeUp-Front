import React from 'react';
import * as S from './style';

const AlarmRing = () => {
  return (
    <S.Container>
      <S.Left src="/assets/ringring.png" alt="ring" />
      <S.Bell autoPlay muted loop>
        <source src="/assets/bell.mp4" type="video/mp4" />
      </S.Bell>
      <S.MessageTitle>
        지금 일어나지 않으면 5분뒤에 <br />
        카카오톡으로 "우빈"님에게 <br />
        메세지가 전송되요!
      </S.MessageTitle>
      <S.BottomContainer>
        <S.MyChat>
          <S.KakaoProfile src="/assets/kakao_profile.png" />
          <S.MyBox>
            <S.MyTitle>나</S.MyTitle>
            <S.ChattingBox src="/assets/chat.png" alt="" />
          </S.MyBox>
        </S.MyChat>
        <S.MessageBox>
          <S.MessageButton>일어나기</S.MessageButton>
        </S.MessageBox>
      </S.BottomContainer>
    </S.Container>
  );
};

export default AlarmRing;
