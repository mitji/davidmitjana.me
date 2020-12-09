import React from 'react';
import { Layout } from '../components';
import { OuterLink, SH1, SH4, SText } from '../elements';

export default function About() {
  return (
    <Layout>
      <SH1>About</SH1>
      <SH4 margin="0 0 1rem">Who am I?</SH4>
      <SText>
        I'm an Audiovisual Systems Engineer with passion for web technologies.
      </SText>
      <SH4 margin="2rem 0 1rem">What do I do?</SH4>
      <SText>
        I have experience as a frontend developer intern in a Spanish fintech startup called
        {' '}
        <OuterLink href="https://www.verse.me/en" target="_blank" rel="noreferrer">Verse</OuterLink>
        , and I currently work as a full-stack developer at
        {' '}
        <OuterLink href="https://www.ddb.es" target="_blank" rel="noreferrer">DDB Spain</OuterLink>
        , one of the most important advertisement companies in the world.
      </SText>
    </Layout>
  )
}
