import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
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
    background-color: #f6ea31;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2e4252;
  }

  input:checked + .slider:before {
    background-color: #869aac;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #c0faf7;
  }

  input:checked + .slider:before {
    transform: translate3D(97%,0,0);
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

  const [theme, setTheme] = useState<string>('light');

  function darkThemeHandler() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <Label className="switch theme-toggler">
      <input type="checkbox" onChange={darkThemeHandler} value={theme} />
      <span className="slider round" />
    </Label>
  )
}
