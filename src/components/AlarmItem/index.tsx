import React, { useState } from 'react';
import * as S from './style';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

interface AlarmItemProps {
  reciever: string;
  content: string;
  time: {
    ampm: string;
    hour: number;
    minute: number;
  };
  day: Date;
  isWeekDay?: boolean;
  weekday?: Array<string>;
  isMainAlarm?: boolean;
}

const AlarmItem = ({
  reciever,
  content,
  time,
  day,
  isWeekDay,
  weekday,
  isMainAlarm,
}: AlarmItemProps) => {
  const [isOn, setIsOn] = useState(false);
  const newWeekDay = weekday && weekday.map((v: any) => v.key);
  return (
    <S.Container isOn={isOn}>
      <S.AlarmHGroup>
        <S.AlarmTitleBox>
          <S.AlarmReciever>
            {reciever}에게{' '}
            <S.DateText>{dayjs(day).format('M월 D일')}</S.DateText>
          </S.AlarmReciever>
          <S.AlarmContent isMainAlarm={isMainAlarm}>{content}</S.AlarmContent>
        </S.AlarmTitleBox>
        <S.Toggle onClick={() => setIsOn((prev) => !prev)}>
          <S.ToggleCircle isOn={isOn} />
        </S.Toggle>
      </S.AlarmHGroup>
      <S.DateBox>
        <S.DateTime>
          {time.ampm}
          <b>
            {time.hour.toString().padStart(2, '0')}:
            {time.minute.toString().padStart(2, '0')}
          </b>
        </S.DateTime>

        <S.WeekDateList>
          {['월', '화', '수', '목', '금', '토', '일'].map((week) => (
            <S.WeekDateListItem>
              <S.WeekSelected isSelected={newWeekDay.includes(week)} />
              <S.WeekDay isSelected={newWeekDay.includes(week)}>
                {week}
              </S.WeekDay>
            </S.WeekDateListItem>
          ))}
        </S.WeekDateList>
      </S.DateBox>
    </S.Container>
  );
};

export default AlarmItem;
