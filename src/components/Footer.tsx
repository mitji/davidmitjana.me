import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Github from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';

const FooterWrapper = styled.footer`
  width: 100%;
  background: #FAFAFA;
`

const SFooter = styled.footer`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  padding: 50px 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #afafaf;
  svg {
    width: 23px;
    height: 23px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      path {
        fill: #81A1C1;
      }
    }
  }
`

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    <FooterWrapper>
      <SFooter>
        <div>
          <p>
            davidmitjana.me &copy;
            {' '}
            {year || ''}
            {' '}
            by mitji
          </p>
        </div>
        <div>
          <a href="https://github.com/mitji" target="_blank" rel="noreferrer">
            <Github />
          </a>
          {' '}
          <a href="https://www.linkedin.com/in/david-mitjana-castro" target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
        </div>
      </SFooter>
    </FooterWrapper>
  )
}
