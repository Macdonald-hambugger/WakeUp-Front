import styled from 'styled-components';
import DateSetForm from './DateSetForm';
import MessageSetForm from './MessageSetForm';
import SendDirectionSetForm from './SendDirectionSetForm';

const AlarmConfigForm = () => {
  return (
    <StyledWrapper>
      <DateSetForm />
      <SendDirectionSetForm />
      <MessageSetForm />
    </StyledWrapper>
  );
};

export default AlarmConfigForm;

const StyledWrapper = styled.div`
  border: 1px solid black;
  background-color: #131313;
  border-radius: 20px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
