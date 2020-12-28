import styled from 'styled-components';
import { media } from '../utils/MediaQueries';

export const TechWrapper = styled.div`
  span {
    margin-right: 0.25rem;
    &:last-of-type {
      margin-right: 0;
    }
  }
`

export const Tech = styled.span`
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--color-gray1);
  color: var(--color-textGray);
  border-radius: 3px;
  margin-top: 0.5rem;
  /* force span to have width and height, if not it breaks the layout appearing 
  not aligned to the other elements at the same level (bottom of the logo) */
  display: inline-block;
`
