import { Link } from 'gatsby';
import styled from 'styled-components';

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
export const NavLink = styled(Link)`
  position: relative;
  cursor: pointer;
  color: #009BF9;
  transition: 0.5s;
  padding: 3px 0;
  &:after {
    content: '>';
    position: absolute;
    right: 0;
    top: 50%;
    opacity: 0;
    transform: translate3d(15px,-50%,0);
    transition: 0.5s;
  }
  &:hover {
    padding-left: 8px;
    padding-right: 25px;
    background: #e7e7e7;
    &:after {
      opacity: 1;
      transform: translate3d(-7px,-50%,0);
    }
  }
  &:active {
    transform: scale(0.97);
  }
`
