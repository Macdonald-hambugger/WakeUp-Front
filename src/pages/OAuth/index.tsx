import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const OAuth = () => {
  const params = useLocation();
  const code = params.search.replace('?code=', '');

  useEffect(() => {
    (async () => {
      const res = await axios.post(`http://192.168.10.81:8080/signup/${code}`);
      console.log(res);
    })();
  }, []);

  return <div></div>;
};

export default OAuth;
