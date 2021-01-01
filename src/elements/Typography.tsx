import styled from 'styled-components';
import { media } from '../utils/MediaQueries';

export const SText = styled.p<{color?: string}>`
  font-size: 1.25rem;
  line-height: 1.55;
  font-weight: 400;
  color: ${props => props.color ? props.color : 'var(--color-text)'};
  font-family: var(--text-font);
  margin-bottom: 1.25rem;
  word-break: break-word;
  strong {
    font-weight: 600;
  }
  ${media.lessThan(560)} {
    font-size: 1.125rem;
  }
`

export const SH1 = styled.h1`
  color: var(--color-title);
  font-family: var(--title-font);
  font-size: 2.75rem;
  line-height: 1.2;
  font-weight: 900;
  margin-bottom: 2rem;
  word-break: break-word;
  ${media.lessThan(560)} {
    font-size: 2.25rem;
  }
`

type H4Props = {
  border?: boolean,
  margin?: string
}

export const SH4 = styled.h4<H4Props>`
  color: var(--color-title);
  font-family: var(--title-font);
  font-size: 1.5rem;
  margin: ${props => props.margin ? props.margin: '3rem 0 2rem'};
  padding-bottom: ${props => props.border ? '1rem': '0'};;
  border-bottom: ${props => props.border ? '1px solid #e1e1e1': 'none'};
`
