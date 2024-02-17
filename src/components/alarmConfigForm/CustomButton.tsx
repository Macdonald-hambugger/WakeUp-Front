import styled, { css } from 'styled-components';

type Props = {
  type: 'cancel' | 'confirm';
  onClick?: () => void;
};

const CustomButton: React.FC<Props> = ({ type, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {type === 'cancel' ? '취소' : '완료'}
    </StyledButton>
  );
};

export default CustomButton;

const StyledButton = styled.button<{ type: string }>`
  border-radius: 10px;
  height: 56px;
  border: none;
  font-size: 16px;
  line-height: 120%;
  font-weight: bold;
  ${(props) =>
    props.type === 'cancel'
      ? css`
          background-color: #1b1b1b;
          color: #bbbbbb;
          width: 105px;
        `
      : css`
          background-color: #23ff62;
          color: black;
          width: 100%;
        `}
`;
