import styled from 'styled-components';

const Main = () => {
  return (
    <StyledWrapper>
      <img src="/assets/phone_lock.jpeg" alt="" />
    </StyledWrapper>
  );
};

export default Main;

const StyledWrapper = styled.div`
  img {
    width: 100%;
  }
`;
