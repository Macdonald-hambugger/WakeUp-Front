import BottomSheet from 'components/bottomSheet/BottomSheet';
import FormWithTitle from 'components/formWithTitle/formWithTitle';
import Portal from 'components/portal/Portal';
import { tempState } from 'context/atom';
import FriendList from 'pages/FriendList';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const SendDirectionSetForm = () => {
  const [open, setOpen] = useState(false);
  const [recoil, setRecoil] = useRecoilState(tempState);
  const handleSelect = (value) => {
    console.log(value);
    setRecoil({ ...recoil, sendTo: value });
    setOpen(false);
  };
  return (
    <FormWithTitle title="보낼 사람">
      <StyledWrapper>
        {!recoil.sendTo ? (
          <button id="selectButton" onClick={() => setOpen(true)}>
            <img src="/assets/add-person.svg" alt="" />
            <p>선택</p>
          </button>
        ) : (
          <div id="profile">
            <div>
              <img src={recoil.sendTo.profile_thumbnail_image} alt="" />
              {recoil.sendTo.profile_nickname}
            </div>
            <p id="change" onClick={() => setOpen(true)}>
              변경
            </p>
          </div>
        )}
      </StyledWrapper>
      {open && (
        <Portal>
          <StyledPortal>
            <FriendList
              setOpen={setOpen}
              onClick={(value) => {
                handleSelect(value);
              }}
            />
          </StyledPortal>
        </Portal>
      )}
    </FormWithTitle>
  );
};

export default SendDirectionSetForm;

const StyledWrapper = styled.div`
  > #selectButton {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: #bbbbbb;
    font-size: 16px;
    width: 100%;
    height: 39px;
    background-color: #1b1b1b;
    border-radius: 10px;
    border: none;
  }
  #profile {
    background-color: #1b1b1b;
    border-radius: 10px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 15px;
    > div {
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      margin-right: 12px;
    }
    #change {
      color: #898989;
      justify-self: flex-end;
    }
  }
`;

const StyledPortal = styled.div`
  border: 1px solid black;
  position: fixed;
  z-index: 99;
  top: 0px;
  left: 0px;
  width: 500px;
`;
