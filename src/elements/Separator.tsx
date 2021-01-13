import styled from 'styled-components';

export const Separator = styled.hr`
  display: block;
  border: 0;
  margin: 2rem 0 0;
  text-align: center;
  :before {
    content: '· · ·';
    color: var(--color-text);
    font-size: 1.75rem;
    letter-spacing: .2em;
    margin-left: .2rem;
  }
`
