import React from 'react';
import { Layout } from '../components';
import { SH1, SH4, SText } from '../elements';

export default function About() {
  return (
    <Layout>
      <SH1>About</SH1>
      <SH4 margin="0 0 1rem">Who am I?</SH4>
      <SText>
        I'm a Web Developer from Barcelona. I'm an Audiovisual Systems Engineer with passion for web technologies.
      </SText>
      <SH4 margin="2rem 0 1rem">What do I do?</SH4>
      <SText>
        I have experience as a frontend devloper intern in a well-known spanish fintech called Verse, and I currently work as a full-stack developer at DDB Spain, one of the most important advertisement companies in the world.
      </SText>
    </Layout>
  )
}
