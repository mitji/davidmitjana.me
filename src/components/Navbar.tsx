import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { NameLogo, ThemeToggler } from '../elements';
import { useHasMounted } from '../hooks';
import { media } from '../utils';

const SNavWrapper = styled.nav<{ showNav: boolean }>`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--color-backgroundNav);
  backdrop-filter: blur(8px);
  /* show/hide nav */
  transform: ${props => props.showNav ? 'translate3d(0,0,0)' : 'translate3d(0,-100%,0);'};
  transition: all 0.5s;
  transition-delay: 0.2s;
  .theme-toggler {
    margin-left: 20px;
    ${media.lessThan(560)} {
      position: absolute;
      top: 1.25rem;
      right: 1.5rem;
    }
  }
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
  .nav-utils {
    display: flex;
    align-items: center;
    ${media.lessThan(560)} {
      width: 100%;
    }
  }
`

const SNavLinksWrapper = styled.ul`
  display: flex;
  list-style: none;
  li {
    margin-right: 0.5rem;
    &:last-of-type {
      margin-right: 0;
    }
    a {
      padding: 0.5rem 0.75rem;
      cursor: pointer;
      border-radius: 3px;
      transition: 0.3s;
      font-size: 1.125rem;
      color: var(--color-text);
      font-weight: 300;
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      ${media.lessThan(560)} {
        padding: 0.75rem 0;
        justify-content: center;
      }
      &:hover {
        background: var(--color-gray1);
      }
      &.active {
        background: var(--color-gray2);
        &:hover {
          background:var(--color-gray1);
        }
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

const NavLink = ( props: { to: string, text: string, activeClassName: string } ) => {
  const { to, text, activeClassName } = props;
  return (
    <li>
      <Link to={to} activeClassName={activeClassName}>{text}</Link>
    </li>
  )
}


export function Navbar() {
  const [showNav, setShowNav] = useState<boolean>(true);
  const hasMounted = useHasMounted();

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
        <div className="nav-utils">
          <SNavLinksWrapper>
            <NavLink to="/blog" text="Blog" activeClassName="active" />
            <NavLink to="/about" text="About" activeClassName="active" />
            <NavLink to="/contact" text="Contact" activeClassName="active" />
          </SNavLinksWrapper>
          <ThemeToggler />
        </div>
      </SNav>
    </SNavWrapper>
  )
}
