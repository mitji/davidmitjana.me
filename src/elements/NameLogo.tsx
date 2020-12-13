import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SName = styled.h3`
  font-size: 1.75rem;
  position: relative;
  color: var(--color-title);
  .hidden-name {
    opacity: 0;
    display: inline-block;
    transition: opacity 0.4s;
    transition-delay: 0.1s;
    &:hover {
      transition: opacity 0s;
      transition-delay: 0s;
    }
  }
  .short-surname {
    display: inline-block;
    padding-right: 13px;
    transform: translate3d(-100%, 0, 0);
    background: transparent;
    transition: 0.4s;
    span {
      background: #64a1f6;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .long-surname {
    position: absolute;
    color: #64a1f6;
    font-size: 0.92rem;
    letter-spacing: 0.75px;
    transition: 0.7s;
    transform: translate3d(0, -50%, 0);
    opacity: 0;
    @media screen and (max-width: 560px) {
      display: none;
    }
  }
  :hover {
    .hidden-name {
      color: var(--color-title);
      opacity: 1;
      transition-delay: 0s;
    }
    .short-surname {
      transform: translate3d(0, 0, 0);
    }
    .long-surname {
      transform: translate3d(0, -20%, 0);
      opacity: 1;
    }
  }
`

export function NameLogo() {
  return (
    <Link to="/">
      <SName>
        d
        <p className="hidden-name">avid</p>
        <p className="short-surname">
          <span>m</span>
          c
        </p>
        <p className="long-surname">mitjana castro</p>
      </SName>
    </Link>
  )
}
