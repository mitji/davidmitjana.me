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
    /* box-shadow: 2px 2px 9px 0px #cccccc; */

    &:after {
      opacity: 1;
      transform: translate3d(-0.85rem,-50%,0);
    }
  }
  &:active {
    transform: scale(0.97);
  }
`

export const OuterLink = styled.a`
  cursor: pointer;
  color: #009BF9;
  text-decoration: underline;
  text-decoration-style: dotted;
`
