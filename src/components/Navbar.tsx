import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { NameLogo } from '../elements';
import { media } from '../utils';

const SNavWrapper = styled.nav<{ showNav: boolean }>`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255,255,255,.9);
  backdrop-filter: blur(8px);
  /* show/hide nav */
  transform: ${props => props.showNav ? 'translate3d(0,0,0)' : 'translate3d(0,-100%,0);'};
  transition: all 0.5s;
  transition-delay: 0.2s;
`

const SNav = styled.div`
  width: 100%;
  max-width: 850px;
  padding: 2.25rem 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.lessThan(560)} {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.25rem 20px;
  }
`

const SNavLinksWrapper = styled.ul`
  display: flex;
  list-style: none;
  li {
    margin-right: 0.5rem;
    cursor: pointer;
    border-radius: 3px;
    transition: 0.3s;
    &:last-of-type {
      margin-right: 0;
    }
    &:hover {
      background: #f0f0f0;
    }
    a {
      padding: 0.5rem 0.75rem;
      font-size: 1.13rem;
      color: #333333;
      font-weight: 300;
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      ${media.lessThan(560)} {
        padding: 0.75rem 0;
        justify-content: center;
      }
    }
    ${media.lessThan(560)} {
      width: 33.3%;
    }
  }
  ${media.lessThan(560)} {
    margin-top: 0.75rem;
    width: 100%;
    justify-content: space-between;
  }
`

const NavLink = ( props: { to: string, text: string } ) => {
  const { to, text } = props;
  return (
    <li>
      <Link to={to}>{text}</Link>
    </li>
  )
}


export function Navbar() {

  const [showNav, setShowNav] = useState<boolean>(true);

  let prevDistance = 0;
  function handleScroll() {
    const distance = document.body.getBoundingClientRect().top;
    if (distance < prevDistance && prevDistance < -10) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    prevDistance = distance;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SNavWrapper className={showNav ? 'show' : 'hide'} showNav={showNav}>
      <SNav>
        <NameLogo />
        <SNavLinksWrapper>
          <NavLink to="/blog" text="Blog" />
          <NavLink to="/about" text="About" />
          <NavLink to="/contact" text="Contact" />
        </SNavLinksWrapper>
      </SNav>
    </SNavWrapper>
  )
}
