import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Github from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';
import Email from '../assets/email.svg';
import { useHasMounted } from '../hooks';
import { media } from '../utils';

const FooterWrapper = styled.footer`
  width: 100%;
  background: var(--color-backgroundFooter);
`

const SFooter = styled.div`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  padding: 50px 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: #afafaf;
  .contact {
    display: flex;
    a {
      margin-right: 0.75rem;
      &:last-of-type {
        margin-right: 0;
      }
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
        ${media.lessThan(560)} {
          width: 28px;
          height: 28px;
        }
      }
    }
  }
`

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const hasMounted = useHasMounted()
  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    <FooterWrapper id="footer">
      <SFooter>
        <div>
          <p>
            &copy;
            {' '}
            {year || ''}
            {' '}
            by mitji
          </p>
        </div>
        <div className="contact">
          <a href="https://github.com/mitji" target="_blank" rel="noreferrer">
            <Github />
          </a>
          {' '}
          <a href="https://www.linkedin.com/in/david-mitjana-castro" target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
          <a href="mailto:contact@davidmitjana.me">
            <Email />
          </a>
        </div>
      </SFooter>
    </FooterWrapper>

  )
}
