// 필요한 라이브러리와 스타일시트를 import합니다.
import dayjs from 'dayjs';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import MonthScrollSelector from './MonthScrollSelector';

const Calendar = ({ selectedDay, setSelectedDay, onClose }) => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const [currentMonth, setCurrentMonth] = useState<Date>(
    selectedDay ? dayjs(selectedDay).toDate() : new Date()
  );
  const [toggle, setToggle] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isSameDay = (toDay: Date, compareDay?: Date | null) => {
    if (
      toDay.getFullYear() === compareDay?.getFullYear() &&
      toDay.getMonth() === compareDay?.getMonth() &&
      toDay.getDate() === compareDay?.getDate()
    ) {
      return true;
    }
    return false;
  };

  const onClickDay = (day: Date) => {
    setSelectedDay(day);
  };

  const buildCalendarDays = () => {
    const curMonthStartDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();
    const curMonthEndDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );
    const prevMonthEndDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      0
    );
    const nextMonthStartDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1
    );
    const days: Date[] = Array.from({ length: curMonthStartDate }, (_, i) => {
      return new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        prevMonthEndDate.getDate() - i
      );
    }).reverse();

    days.push(
      ...Array.from(
        { length: curMonthEndDate.getDate() },
        (_, i) =>
          new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1)
      )
    );

    const remainingDays = 7 - (days.length % 7);
    if (remainingDays < 7) {
      days.push(
        ...Array.from(
          { length: remainingDays },
          (_, i) =>
            new Date(
              nextMonthStartDate.getFullYear(),
              nextMonthStartDate.getMonth(),
              i + 1
            )
        )
      );
    }
    return days;
  };

  const buildCalendarTag = (calendarDays: Date[]) => {
    return calendarDays.map((day: Date, i: number) => {
      const a = dayjs(selectedDay).format('MM-DD');
      const b = dayjs(day).format('MM-DD');
      if (day.getMonth() < currentMonth.getMonth()) {
        return (
          <Tab
            selected={a === b}
            className="prevMonthDay"
            onClick={() => onClickDay(day)}
          >
            {day.getDate()}
          </Tab>
        );
      }
      if (day.getMonth() > currentMonth.getMonth()) {
        return (
          <Tab
            selected={a === b}
            key={i}
            className="nextMonthDay"
            onClick={() => onClickDay(day)}
          >
            {day.getDate()}
          </Tab>
        );
      }

      return (
        <Tab
          style={{
            color: 'white',
          }}
          selected={a === b}
          key={i}
          className={`futureDay ${isSameDay(day, selectedDay) && 'choiceDay'}`}
          onClick={() => onClickDay(day)}
        >
          {day.getDate()}
        </Tab>
      );
    });
  };

  const divideWeek = (calendarTags: JSX.Element[]) => {
    return calendarTags.reduce(
      (acc: JSX.Element[][], day: JSX.Element, i: number) => {
        if (i % 7 === 0) acc.push([day]);
        else acc[acc.length - 1].push(day);
        return acc;
      },
      []
    );
  };

  const calendarDays = buildCalendarDays();
  const calendarTags = buildCalendarTag(calendarDays);
  const calendarRows = divideWeek(calendarTags);

  return (
    <>
      {!toggle ? (
        <StyledWrapper>
          <div className="calendarNav">
            <div id="month" onClick={() => setToggle(true)}>
              <span className="calendarNav-title">
                {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
              </span>
              <img src="/assets/date-arrow.svg" alt="" />
            </div>
            <div id="buttons">
              <p
                onClick={() => {
                  onClose();
                }}
              >
                취소
              </p>
              <p
                onClick={() => {
                  onClose();
                }}
              >
                완료
              </p>
            </div>
          </div>
          <StyledTable>
            <div id="days">
              {daysOfWeek.map((day, i) => (
                <StyledParagraph day={day} key={i} data-testid="calendarHead">
                  {day}
                </StyledParagraph>
              ))}
            </div>
            <div id="dates">
              {calendarRows.map((v) => (
                <div>{v.map((row) => row)}</div>
              ))}
            </div>
          </StyledTable>
        </StyledWrapper>
      ) : (
        <StyledWrapper>
          <div className="calendarNav">
            <div id="month"></div>
            <div id="buttons">
              <p
                onClick={() => {
                  setToggle(false);
                }}
              >
                취소
              </p>
              <p
                onClick={() => {
                  const selected = dayjs(
                    document.getElementById('selected').className
                  );
                  setCurrentMonth(selected.toDate());
                  setToggle(false);
                }}
              >
                완료
              </p>
            </div>
          </div>
          <div id="scrollWrapper">
            <MonthScrollSelector
              height={150}
              selectedDay={dayjs(currentMonth)}
            />
          </div>
        </StyledWrapper>
      )}
    </>
  );
};

export default Calendar;

const StyledWrapper = styled.div`
  > .calendarNav {
    width: 100%;
    padding: 0 20px;
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 16px;
    font-weight: 400;
    > #month {
      display: flex;
      align-items: center;
    }
    > #buttons {
      display: flex;
      gap: 24px;

      p {
        font-size: 15px;

        &:first-child {
          color: #9c9c9c;
        }

        &:nth-child(2) {
          color: white;
        }
      }
    }
  }
  & #scrollWrapper {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledTable = styled.div`
  border: 1px solid black;
  width: 100%;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  & p {
    width: 22px;
    height: 22px;
    text-align: center;
  }
  > #days {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  > #dates {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
    > div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const Tab = styled.p<{ selected: boolean }>`
  border-radius: 100%;
  font-size: 15px;
  color: #3b3b3b;
  line-height: 120%;
  ${(props) =>
    props.selected &&
    css`
      background-color: #23ff62;
      color: black !important;
    `}
`;
const StyledParagraph = styled.p<{ day: string }>`
  color: ${({ day }) => {
    switch (day) {
      case '일':
        return '#A52424';
      case '토':
        return '#2661A8';
      default:
        return '#6B6B6B';
    }
  }};
`;
