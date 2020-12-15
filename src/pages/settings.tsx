import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../components';
import { OuterLink, SH1, SH4, SText, ThemeToggler } from '../elements';
import { ThemeContext } from '../utils';

const SlectorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  button {
    margin-right: 2rem;
    &:last-of-type {
      margin-right: 0;
    }
  }
`

const SettingSelector = styled.button<{isSelected: boolean}>`
  position: relative;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  border: 1px solid var(--color-text);
  color: var(--color-text);
  border-radius: 5px;
  box-shadow: ${props => props.isSelected ? '0px 0px 0px 1px black;' : 'none'};
  background: ${props => props.isSelected ? 'var(--color-gray1)' : 'transparent'};
  transition: 0.3s;
  &:active {
    box-shadow: 0px 0px 0px 1px black;
  }
`

export default function Settings() {

  const [size, setSize] = useState<string>('16px');
  const [titleFont, setTitleFont] = useState<string>('sans-serif');
  const [textFont, setTextFont] = useState<string>('sans-serif');
  const { fontSize, updateFontSize } = useContext(ThemeContext);
  return (
    <Layout>
      <SH1>Customize your experience in this site</SH1>
      <SText>
        Below you'll find all the settings you can customize in this site.
        <br />
        Feel free to reach me at
        {' '}
        <OuterLink href="mailto:contact@davidmitjana.me">contact@davidmitjana.me</OuterLink>
        {' '}
        if you feel something is missing!
      </SText>
      <SH4>Theme</SH4>
      <ThemeToggler />

      <SH4>Font size</SH4>
      <SlectorsWrapper>
        <SettingSelector onClick={() => updateFontSize('14px')} isSelected={fontSize === '14px'}>S</SettingSelector>
        <SettingSelector onClick={() => updateFontSize('16px')} isSelected={fontSize === '16px'}>M</SettingSelector>
        <SettingSelector onClick={() => updateFontSize('18px')} isSelected={fontSize === '18px'}>L</SettingSelector>
      </SlectorsWrapper>

      <SH4>Title font</SH4>
      <SlectorsWrapper>
        <SettingSelector onClick={() => setTitleFont('serif')} isSelected={titleFont === 'serif'}>Serif</SettingSelector>
        <SettingSelector onClick={() => setTitleFont('sans-serif')} isSelected={titleFont === 'sans-serif'}>Sans-serif</SettingSelector>
      </SlectorsWrapper>

      <SH4>Text font</SH4>
      <SlectorsWrapper>
        <SettingSelector onClick={() => setTextFont('serif')} isSelected={textFont === 'serif'}>Serif</SettingSelector>
        <SettingSelector onClick={() => setTextFont('sans-serif')} isSelected={textFont === 'sans-serif'}>Sans-serif</SettingSelector>
      </SlectorsWrapper>
    </Layout>
  )
}
