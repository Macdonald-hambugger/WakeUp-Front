import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  padding-bottom: 20px;
`;

export const TitleBox = styled.hgroup`
  display: flex;
  align-items: center;
  padding: 92px 20px 36px 20px;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: white;
  font-size: 22px;
  font-weight: 700;
`;

export const CalendarIcon = styled.img`
  width: 92px;
  height: 92px;
`;

export const AlarmContainer = styled.ul`
  padding: 0 16px;
`;

export const AlarmOtherTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin: 42px 0 12px 0;
`;

export const AlarmList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
