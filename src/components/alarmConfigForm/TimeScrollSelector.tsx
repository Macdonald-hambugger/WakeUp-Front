import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const TimeScrollSelector = ({ height, selectedDay }) => {
  const ref = useRef();
  const [scrollMinute, setScrollMinute] = useState(0);
  const [scrollHour, setScrollHour] = useState(0);
  const [scrollAMPM, setScrollAMPM] = useState(0);

  const minutes = [];
  const hours = [];
  const ampm = ['오전', '오후'];
  useEffect(() => {
    (ref.current as any).scrollTo(0, dayjs(selectedDay).month() * 50);
  }, [selectedDay]);

  for (let time = 0; time <= 59; time++) {
    minutes.push(time);
  }

  for (let time = 1; time <= 12; time++) {
    hours.push(time);
  }
  const totalHourHeight = 50 * 14;
  const totalMinuteHeight = 50 * 62;
  const totalAMPMHeight = 50 * 4;
  return (
    <StyledWrapper
      style={{
        height: height + 'px',
      }}
      ref={ref}
    >
      <div
        className="scroll-wrapper"
        style={{
          height: height + 'px',
          zoom: '60%',
          marginRight: '20px',
        }}
        onScroll={(e) => {
          const scrollvalue = e.currentTarget.scrollTop;
          setScrollAMPM(scrollvalue);
        }}
      >
        <div style={{ marginTop: '20px' }}>value</div>
        {ampm.map((v, i) => {
          const itsValue = (totalAMPMHeight / 4) * i;

          const selected = Math.abs(scrollAMPM - itsValue) < 25;
          /*         if (selected) setSelected(dayjs(`${v.year}-${v.month}`)); */
          return (
            <p
              id={selected && 'selected-ampm'}
              className={selected && `${v}`}
              style={{
                transform: selected && 'scale(1.3)',
                color: selected && 'white',
              }}
            >
              {v.toString().padStart(2, '0')}
            </p>
          );
        })}
        <div>1</div>
      </div>
      <div
        className="scroll-wrapper"
        style={{
          height: height + 'px',
        }}
        onScroll={(e) => {
          const scrollvalue = e.currentTarget.scrollTop;
          setScrollHour(scrollvalue);
        }}
      >
        <div style={{ marginTop: '20px' }}>value</div>
        {hours.map((v, i) => {
          const itsValue = (totalHourHeight / 14) * i;

          const selected = Math.abs(scrollHour - itsValue) < 25;
          /*         if (selected) setSelected(dayjs(`${v.year}-${v.month}`)); */
          return (
            <p
              id={selected && 'selected-hour'}
              className={selected && `${v}`}
              style={{
                transform: selected && 'scale(1.3)',
                color: selected && 'white',
              }}
            >
              {v.toString().padStart(2, '0')}
            </p>
          );
        })}
        <div>1</div>
      </div>
      <p
        style={{
          color: 'white',
        }}
      >
        :
      </p>
      <div
        className="scroll-wrapper"
        style={{
          height: height + 'px',
        }}
        onScroll={(e) => {
          const scrollvalue = e.currentTarget.scrollTop;
          setScrollMinute(scrollvalue);
        }}
      >
        <div style={{ marginTop: '20px' }}>value</div>
        {minutes.map((v, i) => {
          const itsValue = (totalMinuteHeight / 62) * i;

          const selected = Math.abs(scrollMinute - itsValue) < 25;
          /*         if (selected) setSelected(dayjs(`${v.year}-${v.month}`)); */
          return (
            <p
              id={selected && 'selected-minute'}
              className={selected && `${v}`}
              style={{
                transform: selected && 'scale(1.3)',
                color: selected && 'white',
              }}
            >
              {v.toString().padStart(2, '0')}
            </p>
          );
        })}
        <div>1</div>
      </div>
    </StyledWrapper>
  );
};

export default TimeScrollSelector;

const StyledWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow-y: scroll;
  font-size: 32px;

  color: #4c4c4c;
  & p {
    transition: 0.3s;
    height: 50px;
    line-height: 55px;
    text-align: center;
  }

  ::-webkit-scrollbar {
    display: none;
  }
  & .scroll-wrapper {
    overflow-y: scroll;
    padding-bottom: 20px;
    div {
      line-height: 55px;
      opacity: 0;

      color: white;
    }
  }
`;
