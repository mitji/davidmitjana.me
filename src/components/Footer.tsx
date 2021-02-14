import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { InnerCTA } from '../elements';
import Github from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';
import Email from '../assets/email.svg';
import { useHasMounted } from '../hooks';
import { media, AppContext } from '../utils';

const FooterWrapper = styled.footer`
  width: 100%;
  background: var(--color-backgroundFooter);
  padding: 50px 20px 50px;
`

const SFooter = styled.div`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  color: #afafaf;
  .footer {
    &__links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap-reverse;
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
    }
    &__signature {
      width: 100%;
      margin-top: 0.5rem;
    }
  }

`

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const hasMounted = useHasMounted();
  const { setIsSettingsOpen } = useContext(AppContext);

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    <>
      {hasMounted ? (
        <FooterWrapper>
          <SFooter>
            <div className="footer__links">
              <InnerCTA
                type="button"
                style={{color: '#afafaf', paddingRight: '6px'}}
                onClick={() => {
                  setIsSettingsOpen(true);
                  if (typeof window !== 'undefined') {
                    window.gtag('event', 'inbound_settings_footer', { from: 'footer' });
                  }
                }}
                inline
              >
                Site settings
                <span role="img" aria-label="Gear" style={{marginLeft: '0.25rem'}}>⚙️</span>
              </InnerCTA>
              <div className="contact">
                <a
                  href="https://github.com/mitji"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => typeof window !== 'undefined' && window.gtag('event', 'outbound_github', { from: 'footer' })}
                >
                  <Github />
                </a>
                {' '}
                <a
                  href="https://www.linkedin.com/in/david-mitjana-castro"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => typeof window !== 'undefined' && window.gtag('event', 'outbound_linkedin', { from: 'footer' })}
                >
                  <Linkedin />
                </a>
                <a
                  href="mailto:contact@davidmitjana.me"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => typeof window !== 'undefined' && window.gtag('event', 'outbound_contact', { from: 'footer' })}
                >
                  <Email />
                </a>
              </div>
            </div>
            <div className="footer__signature">
              <p>
                &copy;
                {' '}
                {year || ''}
                {' '}
                by mitji
              </p>
            </div>
          </SFooter>
        </FooterWrapper>
      ) : null}
    </>
  )
}
