import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../utils/MediaQueries';

export const SimpleCTA = styled.a`
  position: relative;
  cursor: pointer;
  color: #009BF9;
  transition: 0.5s;
  &:after {
    content: '>';
    position: absolute;
    right: 0;
    top: 50%;
    opacity: 0;
    transform: translate3d(10px,-50%,0);
    transition: 0.5s;
  }
  &:hover {
    transform: translate3d(-5px,0,0);
    &:after {
      opacity: 1;
      transform: translate3d(15px,-50%,0);
    }
  }
`
export const InnerLink = styled(Link)`
  position: relative;
  cursor: pointer;
  color: #009BF9;
  transition: 0.5s;
  padding: 0.3rem 0;
  &:after {
    content: '>';
    position: absolute;
    right: 0;
    top: 50%;
    opacity: 0;
    transform: translate3d(1rem,-50%,0);
    transition: 0.5s;
    ${media.lessThan(560)} {
      opacity: 1;
    }
  }
  &:hover {
    padding-left: 8px;
    padding-right: 30px;
    background: #ececec;
    color: #009BF9;
    &:after {
      opacity: 1;
      transform: translate3d(-0.85rem,-50%,0);
    }
  }
  &:active {
    transform: scale(0.97);
    background: #dfdfdf;
  }
`

export const BackBtn = styled(Link)`
  position: relative;
  cursor: pointer;
  color: #009BF9;
  transition: 0.5s;
  padding: 0.3rem 0 0.3rem 1rem;
  &:after {
    content: '<';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate3d(0,-50%,0);
    transition: 0.5s;
  }
  &:hover {
    background: #ececec;
    padding-right: 0.75rem;
    padding-left: 1.75rem;
    color: #009BF9;
    &:after {
      opacity: 1;
      transform: translate3d(0.5rem,-50%,0);
    }
  }
  &:active {
    transform: scale(0.97);
    background: #dfdfdf;
  }
`

export const OuterLink = styled.a<{underline?: boolean}>`
  cursor: pointer;
  color: #009BF9;
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
  text-decoration-style: dotted;
  transition: 0.3s;
  height: max-content;
  &:hover {
    background-color: #c6e5ff;
  }
`
