import React from 'react';
import { Layout } from '../components';
import { OuterLink, SH1, SText } from '../elements';

export default function Contact() {
  return (
    <Layout>
      <SH1>Something to say?</SH1>
      <SText>
        Email me at
        {' '}
        <OuterLink href="mailto:contact@davidmitjana.me" underline>contact@davidmitjana.me</OuterLink>
      </SText>
    </Layout>
  )
}
