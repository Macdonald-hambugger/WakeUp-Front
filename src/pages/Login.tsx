const url =
  'https://kauth.kakao.com/oauth/authorize?client_id=a70ee38977223dbfad44a14a6f3b2922&redirect_uri=http://localhost:3000/oauth&response_type=code';

const Login = () => {
  return (
    <div>
      <a href={url}>logi</a>
    </div>
  );
};

export default Login;
