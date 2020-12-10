import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { media } from '../utils';
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
  bottom: 2rem;
  right: 2rem;
  cursor: pointer;
  opacity: ${props => props.show ? '1' : '0'};
  transition: all 0.3s;
  border-radius: 100%;
  &:hover {
    background-color: #e1e1e1;
  }
  svg {
    width: 1.25rem;
    transform: rotate(180deg);
    polygon {
      fill: #6a727a !important;
    }
  }
  @media screen and (max-width: 560px) {
    padding: 1.25rem;
    bottom: 1.25rem;
    right: 1.25rem;
  }
`
export function ScrollToTop() {

  const [show, setShow] = useState<boolean>(false);

  function handleScroll() {
    const viewportWidth = window.innerWidth
    const content = document.getElementById('___gatsby'); 
    if (content && viewportWidth) {
      const scrollPerc = Math.abs(document.body.getBoundingClientRect().top) * 100 / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      console.log(scrollPerc);
      if (
        document.body.getBoundingClientRect().top < -200 &&
        ((viewportWidth < 560 && scrollPerc < 92) || scrollPerc < 85)
      ) {
        setShow(true);
        // check for each small breakpoint in which scroll percentage hide scrollBar
      } else {
        setShow(false);
      }
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
