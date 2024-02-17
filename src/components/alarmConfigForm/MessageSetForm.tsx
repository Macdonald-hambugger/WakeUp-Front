import FormWithTitle from 'components/formWithTitle/formWithTitle';
import { tempState } from 'context/atom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

type Props = {
  onChange?: (value: string) => void;
};

const MessageSetForm: React.FC<Props> = ({ onChange }) => {
  const [recoil, setRecoil] = useRecoilState(tempState);

  return (
    <FormWithTitle title="보낼 메세지">
      <>
        <StyledInput
          onChange={(e) =>
            setRecoil({
              ...recoil,
              message: e.currentTarget.value,
            })
          }
          placeholder="보낼 문구를 입력해주세요"
        />
        <StyledWrapper>
          <p>자니? 자는구나..</p>
          <p>안녕하십니까. 저는 사실..</p>
          <p>교수야 안녕하냐? 난 안녕하다.</p>
          <p>사실 너 처음 봤을 때부터 마음에 안 들었어.</p>
        </StyledWrapper>
        <Styledh2>추천 문구</Styledh2>
      </>
    </FormWithTitle>
  );
};

export default MessageSetForm;

const StyledInput = styled.input`
  height: 50px;
  padding: 16px;
  background-color: #131313;
  font-size: 15px;
  color: white;
  border: 1px solid #2d2d2d;
  outline: none;
  border-radius: 10px;
  ::placeholder {
    color: #6b6b6b;
  }
`;

const StyledWrapper = styled.div`
  border: 1px solid black;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  & p {
    width: fit-content;
    padding: 12px;
    font-size: 15px;
    color: white;
    border-radius: 10px;
    background-color: #1b1b1b;
  }
`;

const Styledh2 = styled.h2`
  color: #6b6b6b;
  margin-top: 10px;
`;
