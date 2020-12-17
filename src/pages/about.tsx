import React from 'react';
import { Layout } from '../components';
import { OuterLink, SH1, SH4, SText } from '../elements';

export default function About() {
  return (
    <Layout>
      <SH1>Hello visitor</SH1>
      <SH4 margin="0 0 1rem">Who am I?</SH4>
      <SText>
        I'm an Audiovisual Systems Engineer with a passion for web technologies.
      </SText>
      <SH4 margin="2rem 0 1rem">What do I do?</SH4>
      <SText>
        I have experience as a frontend developer intern in a Spanish fintech called
        {' '}
        <OuterLink href="https://www.verse.me/en" target="_blank" rel="noreferrer">Verse</OuterLink>
        , and I currently work as a full-stack developer at
        {' '}
        <OuterLink href="https://www.ddb.es" target="_blank" rel="noreferrer">DDB Spain</OuterLink>
        , which is part of one of the most important advertisement companies in the world.
      </SText>
      <SH4 margin="2rem 0 1rem">What can I do?</SH4>
      <SText>
        I'm mainly focused in frontend development with React and some of the frameworks built 
        around React (Gatsby, Next), but I can also code full-stack apps with Node.js, Express.js and MongoDB. I also know how to code modern 
        HTML email templates that work on the most common email clients.
      </SText>
    </Layout>
  )
}
