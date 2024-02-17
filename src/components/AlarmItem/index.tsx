import React, { useState } from 'react';
import * as S from './style';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

interface AlarmItemProps {
  reciever: string;
  content: string;
  time: Date;
  isWeekDay?: boolean;
  weekday?: Array<string>;
  isMainAlarm?: boolean;
}

const AlarmItem = ({
  reciever,
  content,
  time,
  isWeekDay,
  weekday,
  isMainAlarm,
}: AlarmItemProps) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <S.Container isOn={isOn}>
      <S.AlarmHGroup>
        <S.AlarmTitleBox>
          <S.AlarmReciever>{reciever}에게</S.AlarmReciever>
          <S.AlarmContent isMainAlarm={isMainAlarm}>{content}</S.AlarmContent>
        </S.AlarmTitleBox>
        <S.Toggle onClick={() => setIsOn((prev) => !prev)}>
          <S.ToggleCircle isOn={isOn} />
        </S.Toggle>
      </S.AlarmHGroup>
      <S.DateBox>
        <S.DateTime>
          {dayjs(time).locale('ko').format('A')}
          <b>{dayjs(time).format('HH:MM')}</b>
        </S.DateTime>
        {isWeekDay ? (
          <S.WeekDateList>
            {['월', '화', '수', '목', '금', '토', '일'].map((week) => (
              <S.WeekDateListItem>
                <S.WeekSelected isSelected={weekday.includes(week)} />
                <S.WeekDay isSelected={weekday.includes(week)}>
                  {week}
                </S.WeekDay>
              </S.WeekDateListItem>
            ))}
          </S.WeekDateList>
        ) : (
          <S.DateText>{dayjs(time).format('M월 D일')}</S.DateText>
        )}
      </S.DateBox>
    </S.Container>
  );
};

export default AlarmItem;
