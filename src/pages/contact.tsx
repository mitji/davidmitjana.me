import React from 'react';
import { Layout } from '../components';
import { SH1, SText } from '../elements';

export default function Contact() {
  return (
    <Layout>
      <SH1>Contact</SH1>
      <SText>
        I'd love to talk! Email me at the address below
      </SText>
      <a href="mailto:contact@davidmitjana.me">contact@davidmitjana.me</a>
    </Layout>
  )
}
