import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const MonthScrollSelector = ({ height, selectedDay }) => {
  const ref = useRef();
  const [scroll, setScroll] = useState(0);

  const months = [];
  const year = 2024;
  useEffect(() => {
    (ref.current as any).scrollTo(0, dayjs(selectedDay).month() * 50);
  }, [selectedDay]);

  for (let month = 1; month <= 12; month++) {
    months.push({ year, month });
  }
  const totalHeight = 50 * 14;
  return (
    <StyledWrapper
      style={{
        height: height + 'px',
      }}
      ref={ref}
      onScroll={(e) => {
        const scrollvalue = e.currentTarget.scrollTop;
        setScroll(scrollvalue);
      }}
    >
      <div>value</div>
      {months.map((v, i) => {
        const itsValue = (totalHeight / 14) * i;

        const selected = Math.abs(scroll - itsValue) < 25;
        /*         if (selected) setSelected(dayjs(`${v.year}-${v.month}`)); */
        return (
          <p
            id={selected && 'selected'}
            className={selected && `${v.year}-${v.month}`}
            style={{
              transform: selected && 'scale(1.3)',
              color: selected && 'white',
            }}
          >
            {v.year + '년 ' + v.month + '월'}
          </p>
        );
      })}
      <div>1</div>
    </StyledWrapper>
  );
};

export default MonthScrollSelector;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  overflow-y: scroll;
  font-size: 20x;
  padding: 10px 0 20px;
  margin-bottom: 20px;
  color: #4c4c4c;
  & p {
    transition: 0.3s;
    height: 50px;
    line-height: 50px;
  }
  & > div {
    line-height: 30px;
    opacity: 0;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
