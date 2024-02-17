import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MyTitle = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: white;
  margin-left: 18px;
`;

export const ChattingBox = styled.img`
  height: 50px;
  width: fit-content;
`;

export const MyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MyChat = styled.div`
  width: 100%;
  height: 114px;
  padding: 24px 32px;
  display: flex;
  gap: 8px;
`;

export const KakaoProfile = styled.img`
  width: 40px;
  height: 40px;
`;

export const MessageBox = styled.div`
  width: 100%;
  padding: 52px 16px;
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

export const MessageTitle = styled.h1`
  font-size: 25px;
  font-weight: 600;
  color: white;
  text-align: center;
  margin: 50px 0 200px 0;
`;

export const MessageButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: #23ff62;
  color: black;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
`;

export const Bell = styled.video`
  position: fixed;
  top: 20%;
  width: 250px;
  height: 250px;
`;

export const Left = styled.img`
  position: fixed;
  width: 180px;
  top: 20%;
  z-index: 1;
`;
