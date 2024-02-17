import styled from 'styled-components';

const url =
  'https://kauth.kakao.com/oauth/authorize?client_id=a70ee38977223dbfad44a14a6f3b2922&redirect_uri=http://localhost:3000/oauth&response_type=code';

const Onboarding = () => {
  return (
    <Container>
      <Logo src="/assets/logo.svg" alt="logo" />
      <Description>주변 지인에게 카톡 보내주는 알람 앱</Description>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 14px;
`;

const Logo = styled.img`
  width: 200px;
  height: fit-content;
`;

const Description = styled.span`
  font-size: 18px;
  color: white;
  font-weight: 600;
`;

const KakaoLogo = styled.img`
  width: 28px;
  margin-right: 4px;
`;

export default Onboarding;
