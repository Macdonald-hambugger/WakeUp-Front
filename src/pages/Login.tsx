import styled from 'styled-components';

const url =
  'https://kauth.kakao.com/oauth/authorize?client_id=a70ee38977223dbfad44a14a6f3b2922&redirect_uri=http://localhost:3000/oauth&response_type=code';

const Login = () => {
  return (
    <Container>
      <Logo src="/assets/logo.svg" alt="logo" />
      <Description>주변 지인에게 카톡 보내주는 알람 앱</Description>
      <LoginButton onClick={() => (window.location.href = url)}>
        <KakaoLogo src="/assets/kakaotalk.svg" alt="" />
        카카오로 로그인하기
      </LoginButton>
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

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  bottom: 40px;
  position: fixed;
  border-radius: 9999px;
  color: #624a3d;
  width: 420px;
  padding: 12px 0;
  background-color: #fee500;
  font-size: 16px;
  font-weight: 700;
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

export default Login;
