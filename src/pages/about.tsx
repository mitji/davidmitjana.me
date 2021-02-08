import React from 'react';
import styled from 'styled-components';
import { Layout, SEO } from '../components';
import { InnerLink, OuterLink, SH1, SH4, SText, Tech, TechWrapper } from '../elements';

const Header = styled.div`
  h1 {
    margin-right: 2rem;
  }
`

// TO DO: create component for this (same in intro but different width)
const MyImgWrapper = styled.div`
  width: 200PX;
  height: 200PX;
  border-radius: 100%;
  background-color: #f9f6c5;
  background-image: url(https://res.cloudinary.com/cyranoapp/image/upload/v1609327373/davidmitjana.me/davidmitji_yi6l6t.png);
  background-size: 168%;
  background-position: 53% 7%;
  margin: 0px 0.75rem 2rem 0px;
  overflow: hidden;
`

export default function About() {

  const skills = [
    'HTML',
    'CSS',
    'SCSS',
    'Javascript',
    'Typescript',
    'React.js',
    'Redux',
    'Context API',
    'styled-components',
    'Gatsby.js',
    'HTML email templates',
    'JQuery',
    'Git',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Python',
    'Pytorch',
    'Natural Language Processing'
  ];

  return (
    <Layout>
      <SEO title="About" />
      <Header>
        <SH1>Hello visitor</SH1>
        <MyImgWrapper />
      </Header>
      <SH4 margin="0 0 1rem">Who am I</SH4>
      <SText className="readable-text">
        I'm an Audiovisual Systems Engineer with a passion for web technologies.
      </SText>
      <SH4 margin="2rem 0 1rem">What do I do</SH4>
      <SText className="readable-text">
        I have experience as a frontend developer intern in a Spanish fintech called
        {' '}
        <OuterLink href="https://www.verse.me/en" target="_blank" rel="noreferrer" inline>Verse</OuterLink>
        {' '}
        and I currently work as a full-stack developer at
        {' '}
        <OuterLink href="https://www.ddb.es" target="_blank" rel="noreferrer" inline>DDB Spain</OuterLink>
        , which is part of one of the most important advertising companies in the world.
        {' '}
        I also build stuff in my free time, you can check all my side projects 
        {' '}
        <InnerLink to="/portfolio" inline>here</InnerLink>
        .
      </SText>
      <SH4 margin="2rem 0 1rem">What can I do</SH4>
      <SText className="readable-text">
        I'm mainly focused in frontend development with React, but I can also code full-stack apps with Node.js, Express.js, and MongoDB. I also know how to code modern 
        HTML email templates that work on the most common email clients.
      </SText>
      <SH4 margin="2rem 0 1rem">Skills</SH4>
      <TechWrapper>
        {skills && skills.map((el:string, i: number) => <Tech key={i}>{el}</Tech>)}
      </TechWrapper>
    </Layout>
  )
}
