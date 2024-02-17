import Home from 'pages/Home';
import AlarmAdd from 'pages/AlarmAdd';
import AlarmDetail from 'pages/AlarmDetail';
import Login from 'pages/Login';
import Main from 'pages/Main';
import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import OAuth from 'pages/OAuth';
import FriendList from 'pages/FriendList';
import AlarmRing from 'pages/AlarmRing';
import Onboarding from 'pages/Onboarding';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import RoutePage from 'pages/route';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <StyledWrapper>
        <RecoilRoot>
          <BrowserRouter>
            <div
              style={{
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/main" element={<Main />} />
                  <Route path="/oauth" element={<OAuth />} />
                  <Route path="/onboarding" element={<Onboarding />} />
                  <Route path="/alarm">
                    <Route path="ring" element={<AlarmRing />} />
                    <Route path="add" element={<AlarmAdd />} />
                  </Route>
                </Routes>
              </div>
            </div>
            <RoutePage />
          </BrowserRouter>
        </RecoilRoot>
      </StyledWrapper>
    </div>
  );
};

export default App;

const StyledWrapper = styled.div`
  border: 1px solid black;
  min-height: 1080px;
  width: 500px;
  background-color: black;
`;
