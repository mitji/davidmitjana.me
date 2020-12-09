import React from 'react';
import { Layout } from '../components';
import { InnerLink, SH1, SH4, SText } from '../elements';

export default function ErrorPage() {
  return (
    <Layout>
      <InnerLink to="/">Go home</InnerLink>
      <SH1>
        Oooops!
        <br />
        This page doesn't exist
      </SH1>
    </Layout>
  )
}
