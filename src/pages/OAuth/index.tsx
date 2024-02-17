import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const instance = axios.create({
  baseURL: 'http://192.168.10.81:8080',
  withCredentials: false,
});

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
      console.log(result);
    })();
  }, []);

  return <div></div>;
};

export default OAuth;
