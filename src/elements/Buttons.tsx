import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { media } from '../utils/MediaQueries';

// link to another page inside the site
export const InnerLink = styled(Link)<{inline?: boolean}>`
  position: relative;
  cursor: pointer;
  color: #009BF9;
  ${props => props.inline ? css`
    transition: 0.3s;
    height: max-content;
    &:hover {
      background: var(--color-innerLinkBg);
    }
  ` : css`
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
      background: var(--color-innerLinkBg);
      color: #009BF9;
      &:after {
        opacity: 1;
        transform: translate3d(-0.85rem,-50%,0);
      }
    }
    &:active {
      transform: scale(0.97);
      background: var(--color-innerLinkBg);
    }
  `}
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
    background: var(--color-innerLinkBg);
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
    background: var(--color-innerLinkBg);
  }
`
// link that makes you leave the site
export const OuterLink = styled.a<{underline?: boolean, inline?: boolean, padding?: string}>`
  transition: 0.3s;
  ${props => props.inline ? css`
    color: #009BF9;
    height: max-content;
    &:hover {
      background-color: #c6e5ff;
    }
  `: css`
    border-radius: 5px;
    padding: 0.4rem 0.75rem;
    background: var(--color-innerCTAbg);
    color: var(--color-innerCTAtext);
    font-weight: bold;
    &:hover {
      background: #c6e5ff;
    }
    /* margins are modified in the component where the button is used */
  `}
`
