import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  children?: ReactNode;
};

const FormWithTitle: React.FC<Props> = ({ title, children }) => {
  return (
    <StyledWrapper>
      <h2>{title}</h2>
      {children}
    </StyledWrapper>
  );
};

export default FormWithTitle;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  > h2 {
    font-size: 14px;
    margin-bottom: 12px;
    margin-left: 4px;
  }
`;
