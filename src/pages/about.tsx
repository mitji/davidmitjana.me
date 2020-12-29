import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components';
import { Avatar, OuterLink, SH1, SH4, SText } from '../elements';

const Header = styled.div`
  h1 {
    margin-right: 2rem;
  }
`

const MyImgWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: #f9f6c5;
  margin: 0 0.75rem 2rem 0;
  overflow: hidden;
  img {
    width: auto !important;
    height: 176% !important;
    transform: translate3d(-84px,-22px,0px);
  }
`

export default function About() {
  return (
    <Layout>
      <Header>
        <SH1>Hello visitor</SH1>
        <MyImgWrapper>
          <Avatar />
        </MyImgWrapper>
      </Header>
      <SH4 margin="0 0 1rem">Who am I</SH4>
      <SText>
        I'm an Audiovisual Systems Engineer with a passion for web technologies.
      </SText>
      <SH4 margin="2rem 0 1rem">What do I do</SH4>
      <SText>
        I have experience as a frontend developer intern in a Spanish fintech called
        {' '}
        <OuterLink href="https://www.verse.me/en" target="_blank" rel="noreferrer" inline>Verse</OuterLink>
        , and I currently work as a full-stack developer at
        {' '}
        <OuterLink href="https://www.ddb.es" target="_blank" rel="noreferrer" inline>DDB Spain</OuterLink>
        , which is part of one of the most important advertisement companies in the world.
      </SText>
      <SH4 margin="2rem 0 1rem">What can I do</SH4>
      <SText>
        I'm mainly focused in frontend development with React and some of the frameworks built 
        around React (Gatsby, Next), but I can also code full-stack apps with Node.js, Express.js and MongoDB. I also know how to code modern 
        HTML email templates that work on the most common email clients.
      </SText>
    </Layout>
  )
}
