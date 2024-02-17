import React, { ReactElement, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { fadeIn, fadeOut, frameDown, frameUp } from '../../styles/keyframes';
import Portal from 'components/portal/Portal';

type TProps = {
  id?: string;
  isOpen: boolean;
  children: ReactElement;
  onClose: (...props) => void;
};

const BottomSheet: React.FC<TProps> = ({
  children,
  id,
  isOpen,
  onClose,
  ...props
}) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (isOpen) setVisible(true);
  }, [isOpen]);
  if (!isOpen) return null;

  const handleClose = () => {
    onClose && setVisible(false);
  };
  const handleAnimationEnd = () => !visible && onClose?.(handleClose);

  const newChildren = React.cloneElement(children, {
    handleClose: handleClose,
  });

  return (
    <Portal id={id}>
      <StyledWrapper
        {...props}
        visible={visible}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="sheet-overlay" onClick={handleClose} />
        <div className="sheet-container">{newChildren}</div>
      </StyledWrapper>
    </Portal>
  );
};

export default BottomSheet;

const StyledWrapper = styled.div<any>`
  ${({ visible }) => {
    return css`
      position: relative;

      .sheet-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        animation: ${!visible ? fadeOut : fadeIn} 0.2s forwards;
      }

      .sheet-container {
        position: fixed;
        bottom: 0;
        width: 100%;
        max-width: 664px;
        border-radius: 20px 20px 0 0;
        background-color: #1b1b1b;
        z-index: 1000;

        animation: ${!visible ? frameDown : frameUp} 0.2s forwards;

        .sheet-header {
          height: 4px !important;
          margin: 10px auto 10px auto;
          border-radius: 2px;
        }
      }
    `;
  }}
`;
