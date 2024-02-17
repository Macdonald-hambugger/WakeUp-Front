import React from 'react';
import * as S from './style';
import Header from 'components/Header';
import AlarmItem from 'components/AlarmItem';

const Home = () => {
  const list = JSON.parse(localStorage.getItem('list')) ?? [];
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
          time={{
            ampm: '오전',
            hour: 6,
            minute: 30,
          }}
          day={new Date()}
          weekday={['월', '일']}
          isWeekDay
          isMainAlarm
        />
        <S.AlarmOtherTitle>다른 알람들</S.AlarmOtherTitle>
        <S.AlarmList>
          {list.map((v, i) => (
            <AlarmItem
              key={i}
              reciever={v.sendTo.profile_nickname}
              content={v.message}
              day={v.date}
              time={v.time}
              weekday={v.days}

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
