import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RoutePage = () => {
  const navigate = useNavigate();
  return (
    <StyledButtonWrapper>
      <button onClick={() => navigate('/main')}>휴대폰 잠금</button>
      <button onClick={() => navigate('/login')}>로그인</button>
      <button onClick={() => navigate('/onboarding')}>온보딩</button>
      <button onClick={() => navigate('/')}>알람 리스트</button>
      <button onClick={() => navigate('/alarm/add')}>알람 추가</button>
      <button onClick={() => navigate('/alarm/ring')}>알람 울림</button>
      <button onClick={() => navigate('/empty')}>빈화면</button>
    </StyledButtonWrapper>
  );
};

export default RoutePage;

const StyledButtonWrapper = styled.div`
  position: fixed;
  z-index: 0;
  top: 0px;
  right: 0px;
  border: 1px solid black;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  button {
    padding: 10px;
    font-size: 20px;
  }
`;
