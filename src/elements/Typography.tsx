import styled from 'styled-components';

export const SText = styled.p`
  font-size: 1.25rem;
  line-height: 1.55;
  font-weight: 400;
  color: #2c2c2c;
  margin-bottom: 1.25rem;
  strong {
    font-weight: 600;
  }
`

export const SH1 = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 900;
  color: #000000;
  /* font-family: 'Montserrat', Arial Black, Arial, Helvetica, sans-serif; */
  margin-bottom: 2rem;
`

type H4Props = {
  border?: boolean,
  margin?: string
}

export const SH4 = styled.h4<H4Props>`
  font-size: 1.5rem;
  margin: ${props => props.margin ? props.margin: '3rem 0 2rem'};
  padding-bottom: ${props => props.border ? '1rem': '0'};;
  border-bottom: ${props => props.border ? '1px solid #e1e1e1': 'none'};
`
