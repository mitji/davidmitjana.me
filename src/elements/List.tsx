import styled from 'styled-components';
import { media } from '../utils/MediaQueries';

export const Ul = styled.ul`
  margin-left: 2rem;
  margin-bottom: 1.25rem;
  color: var(--color-text);
  li {
    font-size: 1.25rem;
    line-height: 1.55;
    ${media.lessThan(560)} {
      font-size: 1.125rem;
    }
    margin-bottom: 0.5rem;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

export const Ol = styled.ol`
  margin-left: 2rem;
  margin-bottom: 1.25rem;
  color: var(--color-text);
  li {
    font-size: 1.25rem;
    line-height: 1.55;
    ${media.lessThan(560)} {
      font-size: 1.125rem;
    }
    margin-bottom: 0.5rem;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
