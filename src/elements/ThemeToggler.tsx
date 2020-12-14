import React, { useEffect, useState, useContext, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery, } from 'gatsby';
import { ThemeContext } from '../utils';
// import light from '../assets/light.png';

const Label = styled.label<{url: string,}>`
  position: relative;
  display: inline-block;
  width: 55px;
  height: 30px;

  input { 
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e1e1e1;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 3px;
    background-color: #ffce71;
    background-image: url(${props => props.url ? props.url : 'unset'});
    background-size: 100% 100%;
    transition: 0.6s;
  }

  input:checked + .slider {
    /* background-color: #2e4252; */
  }

  input:checked + .slider:before {
    background-color: #869aac;
    transform: translate3d(97%,0,0);
  }

  input:focus + .slider:before {
    box-shadow: 0px 0px 4px 3px #64a1f6;
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`

export function ThemeToggler() {
  const { theme, updateTheme } = useContext(ThemeContext);
  const [lightSrc, setLightSrc] = useState<string>('');
  const [darkSrc, setDarkSrc] = useState<string>('');
  // if (!theme) {
  //   return null
  // }
  const data = useStaticQuery(graphql`
    query {    
      light: file(relativePath: {eq: "light.png"}) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      dark: file(relativePath: {eq: "dark.png"}) {
        childImageSharp {
          fluid {
            src
          }
        }
      },
    }
  `)

  useEffect(() => {
    setLightSrc(data.light.childImageSharp.fluid.src);
    setDarkSrc(data.dark.childImageSharp.fluid.src);
  }, [data]);

  
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <Label className="switch theme-toggler" url={theme === 'light' ? lightSrc : darkSrc}>
      <input
        type="checkbox"
        onChange={(e: SyntheticEvent) => {
          updateTheme(e.target.checked ? 'dark' : 'light');
        }}
        value={theme}
        checked={theme === 'dark'}
      />
      <span className="slider round" />
      {/* <img src={data.file.childImageSharp.fluid.src} alt="Sun" /> */}
    </Label>
  )
}
