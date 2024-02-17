import { instance } from 'apis';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const OAuth = () => {
  const params = useLocation();
  const code = params.search.replace('?code=', '');

  useEffect(() => {
    (async () => {
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        {
          grant_type: 'authorization_code',
          client_id: 'a70ee38977223dbfad44a14a6f3b2922',
          redirect_uri: 'http://localhost:3000/oauth',
          code,
        },
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        }
      );
      console.log(res);

      const result = await instance.post(`/signup/${res.data.access_token}`);
      localStorage.setItem('token', result.data.accessToken);
    })();
  }, []);

  return <Container />;
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;

export default OAuth;
