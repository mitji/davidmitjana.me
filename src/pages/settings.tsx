import React from 'react';
import { Layout } from '../components';
import { OuterLink, SH1, SText } from '../elements';

export default function Settings() {
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
    </Layout>
  )
}
