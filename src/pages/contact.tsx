import React from 'react';
import { Layout, SEO } from '../components';
import { OuterLink, SH1, SText } from '../elements';

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <SH1>Something to say?</SH1>
      <SText className="readable-text">
        Email me at
        {' '}
        <OuterLink href="mailto:contact@davidmitjana.me" inline underline>contact@davidmitjana.me</OuterLink>
        .
      </SText>
    </Layout>
  )
}
