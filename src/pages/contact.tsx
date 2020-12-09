import React from 'react';
import { Layout } from '../components';
import { OuterLink, SH1, SText } from '../elements';

export default function Contact() {
  return (
    <Layout>
      <SH1>Contact</SH1>
      <SText>
        I'd love to talk! Email me at
        {' '}
        <OuterLink href="mailto:contact@davidmitjana.me">contact@davidmitjana.me</OuterLink>
      </SText>
    </Layout>
  )
}
