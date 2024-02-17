import React from 'react';
import * as S from './style';
import Header from 'components/Header';
import AlarmItem from 'components/AlarmItem';

const Home = () => {
  return (
    <S.Container>
      <Header />
      <S.TitleBox>
        <S.Title>
          내일 이 시간에 못 일어나면 <br />
          메시지가 보내져요!
        </S.Title>
        <S.CalendarIcon src="/assets/calendar.png" alt="calendar" />
      </S.TitleBox>
      <S.AlarmContainer>
        <AlarmItem
          reciever="교수님"
          content="과제가 너무 많아요"
          time={new Date()}
          weekday={['월', '일']}
          isWeekDay
          isMainAlarm
        />
        <S.AlarmOtherTitle>다른 알람들</S.AlarmOtherTitle>
        <S.AlarmList>
          {Array.from({ length: 7 }).map((_, i) => (
            <AlarmItem
              key={i}
              reciever="교수님"
              content="과제가 너무 많아요"
              time={new Date()}
              //   weekday={['월', '일']}
              //   isWeekDay
            />
          ))}
        </S.AlarmList>
      </S.AlarmContainer>
    </S.Container>
  );
};

export default Home;
