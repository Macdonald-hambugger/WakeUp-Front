import Home from 'pages/Home';
import AlarmAdd from 'pages/AlarmAdd';
import AlarmDetail from 'pages/AlarmDetail';
import Login from 'pages/Login';
import Main from 'pages/Main';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OAuth from 'pages/OAuth';
import FriendList from 'pages/FriendList';
import AlarmRing from 'pages/AlarmRing';
import Onboarding from 'pages/Onboarding';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';

const App = () => {
  return (
    <StyledWrapper>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="/oauth" element={<OAuth />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/alarm">
              <Route path="ring" element={<AlarmRing />} />
              <Route path="add" element={<AlarmAdd />} />
              <Route path="detail" element={<AlarmDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </StyledWrapper>
  );
};

export default App;

const StyledWrapper = styled.div`
  border: 1px solid black;
  min-height: 100vh;
  background-color: black;
`;
