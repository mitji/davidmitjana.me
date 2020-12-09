import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Chevron from '../assets/chevron.svg';

const ToTopButton = styled.button<{show: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  padding: 0.75rem;
  background-color: #e1e1e1a3;
  position: fixed;
  bottom: 2vw;
  right: 2vw;
  cursor: pointer;
  opacity: ${props => props.show ? '1' : '0'};
  transition: all 0.3s;
  border-radius: 100%;
  &:hover {
    background-color: #e1e1e1;
  }
  svg {
    width: 18px;
    transform: rotate(180deg);
    polygon {
      fill: #6a727a !important;
    }
  }
`
export function ScrollToTop() {

  const [show, setShow] = useState<boolean>(false);

  function handleScroll() {
    // eslint-disable-next-line no-console
    console.log(document.body.getBoundingClientRect().top);
    if (document.body.getBoundingClientRect().top < -200) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <ToTopButton
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      show={show}
    >
      <Chevron />
    </ToTopButton>
  )
}
