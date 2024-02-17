import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  background-color: #000;
`;

export const Header = styled.div`
  padding: 16px;
  width: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 56px;
`;

export const ToolBox = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const ToolText = styled.span`
  font-size: 15px;
  color: white;
`;

export const CancelText = styled(ToolText)`
  color: #9c9c9c;
`;

export const SearchBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const SearchInput = styled.input`
  width: 100%;
  position: absolute;
  height: 50px;
  outline: none;
  color: white;
  font-size: 15px;
  border: 1px solid #6b6b6b;
  border-radius: 10px;
  background-color: transparent;
  padding-left: 48px;
`;

export const SearchLogo = styled.img`
  position: absolute;
  left: 16px;
`;

export const Friends = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FriendListItem = styled.li`
  width: 100%;
  height: 40px;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 9999px;
`;

export const ProfileText = styled.h1`
  font-size: 15px;
  font-weight: 500;
  color: white;
`;
