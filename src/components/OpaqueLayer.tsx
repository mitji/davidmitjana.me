import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppContext, media } from '../utils';

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100%;
`;

const Opaque = styled.div<{ isOpen: boolean | null }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  z-index: 11;
  transition: opacity 0.3s;
  opacity: ${props => props.isOpen ? '0.4' : '0'};
`

const Modal = styled.div`
  position: fixed;
  z-index: 12;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 50rem;
  height: 100%;
  background: var(--color-backgroundBody);
  padding: 2rem;
  overflow: auto;
  transform: translate3d(100%,0,0);
  transition: transform 0.3s 0.1s;
  ${media.moreThan(560)} {
    padding: 3rem;
    /* width */
    &::-webkit-scrollbar {
      width: 12px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      border: none;
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: var(--color-gray1);
    }
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: var(--color-textGray);
    }
  }
  &.modal-open {
    transform: translate3d(0%,0,0);
  }
  &.modal-close {
    transform: translate3d(100%,0,0);
  }
  .close-btn {
    transform: translate3d(-60%, -60%, 0);
    background: none;
    border: none;
    color: var(--color-text);
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    ${media.moreThan(560)} {
      transform: translate3d(-80%, -80%, 0);
    }
  }
`

type OpaqueLayerProps = {
  component: React.ReactNode;
}

export function OpaqueLayer( props: OpaqueLayerProps ) {

  const { component } = props;
  const { isSettingsOpen, setIsSettingsOpen} = useContext(AppContext);
  const [open, setOpen] = useState<boolean | null>(null);

  function closeLayer() {
    setOpen(false);
    setTimeout(() => setIsSettingsOpen(false), 300);
  }

  useEffect(() => {
    if (isSettingsOpen) {
      setOpen(true)
    } else if (isSettingsOpen === false) {
      setOpen(false);
    }
  }, [isSettingsOpen]);

  return (
    isSettingsOpen ? (
      <ModalWrapper>
        <Opaque isOpen={open} onClick={closeLayer} />
        <Modal className={open ? 'modal-open' : 'modal-close'}>
          <button type="button" className="close-btn" onClick={closeLayer}>
            &#10005;
          </button>
          {component}
        </Modal> 
      </ModalWrapper>
    ) : null
  )
}
