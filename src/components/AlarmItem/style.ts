import styled, { css } from 'styled-components';

export const Container = styled.div<{ isOn: boolean }>`
  width: 100%;
  padding: 16px;
  background-color: #1b1b1b;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 20px;
  ${({ isOn }) =>
    !isOn &&
    css`
      opacity: 0.6;
    `}
`;

export const AlarmHGroup = styled.hgroup`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AlarmTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const AlarmReciever = styled.span`
  /*  color: #9c9c9c; */
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

export const AlarmContent = styled.h1<{ isMainAlarm: boolean }>`
  color: white;
  font-size: ${({ isMainAlarm }) => (isMainAlarm ? '26px' : '20px')};
`;

export const Toggle = styled.div`
  width: 48px;
  height: 24px;
  background-color: #3b3b3b;
  border-radius: 9999px;
  display: flex;
`;

export const ToggleCircle = styled.div<{ isOn: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 9999px;

  ${({ isOn }) =>
    isOn
      ? css`
          background-color: #25ff62;
          margin-left: auto;
        `
      : css`
          margin-right: auto;
          background-color: #4c4c4c;
        `}
`;

export const DateBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DateTime = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  b {
    margin-top: -4px;
    margin-left: 4px;
    font-size: 30px;
    font-weight: 600;
  }
`;

export const DateText = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: white;
`;

export const WeekDateList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const WeekDateListItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2px;
  align-items: center;
`;

export const WeekSelected = styled.div<{ isSelected: boolean }>`
  width: 3px;
  height: 3px;
  background-color: ${({ isSelected }) =>
    isSelected ? '#23ff62' : 'transparent'};
  border-radius: 999px;
`;

export const WeekDay = styled.span<{ isSelected: boolean }>`
  font-size: 15px;
  color: ${({ isSelected }) => (isSelected ? 'white' : '#898989')};
`;
