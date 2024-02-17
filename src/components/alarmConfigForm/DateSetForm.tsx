import BottomSheet from 'components/bottomSheet/BottomSheet';
import { DAYS_ARR } from 'constants/day';
import { useState } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
import dayjs from 'dayjs';
import { useRecoilState } from 'recoil';
import { tempState } from 'context/atom';

type Props = {};

const DateSetForm: React.FC<Props> = () => {
  const [selectedDays, setDays] = useState([]);
  const [selectedDate, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [recoil, setRecoil] = useRecoilState(tempState);

  const handleClick = (value) => {
    if (selectedDays.includes(value)) {
      const result = selectedDays.filter((v) => v.key !== value.key);
      setRecoil({ ...recoil, days: result });
      setDays(result);
      return;
    }
    const result = [...selectedDays, value];
    setRecoil({ ...recoil, days: result });
    setDays(result);
  };

  const handleSetDate = (value) => {
    setDate(value);
    setRecoil({ ...recoil, date: value });
    setOpen(false);
  };

  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const date = dayjs(selectedDate);

  return (
    <>
      <StyledWrapper>
        <div
          id="dateWrapper"
          onClick={() => {
            setOpen(true);
          }}
        >
          <p>
            <span>시작 날짜</span>
            <span id="datevalue">
              {date.year()}/{(date.month() + 1).toString().padStart(2, '0')}/
              {date.date().toString().padStart(2, '0')} -{' '}
              {daysOfWeek[date.day()]}
            </span>
          </p>
          <img src="/assets/calendar.svg" alt="" />
        </div>
        <div id="dayWrapper">
          {DAYS_ARR.map((value) => (
            <div
              className="day-block"
              style={{
                color: selectedDays.includes(value) && '#23FF62',
              }}
              onClick={() => {
                handleClick(value);
              }}
              key={value.key}
            >
              {value.key}
            </div>
          ))}
        </div>
      </StyledWrapper>
      <BottomSheet
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Calendar
          selectedDay={selectedDate}
          setSelectedDay={handleSetDate}
          onClose={() => setOpen(false)}
        />
      </BottomSheet>
    </>
  );
};

export default DateSetForm;

const StyledWrapper = styled.div`
  > #dateWrapper {
    height: 56px;
    border-radius: 10px;
    background-color: #1b1b1b;
    color: #6b6b6b;
    padding: 16px;
    line-height: 120%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      display: flex;
      font-size: 12px;
      gap: 12px;

      #datevalue {
        color: white;
        font-size: 16px;
      }
    }
  }
  > #dayWrapper {
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
    color: #898989;
    margin-top: 28px;
  }
`;
