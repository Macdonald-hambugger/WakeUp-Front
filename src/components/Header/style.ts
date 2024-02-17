import styled from 'styled-components';

export const Container = styled.main`
  padding: 16px;
  width: 500px;
  background-color: #000;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  height: 56px;
`;

export const Logo = styled.img`
  height: 20px;
  width: fit-content;
`;

export const ToolBox = styled.aside`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Tool = styled.img`
  width: 24px;
  height: 24px;
`;
