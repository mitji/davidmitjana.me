import React from 'react';
import styled from 'styled-components';
import { media } from '../utils';

const SLayout = styled.div`
  max-width: 750px;
  margin: 4rem auto;
  padding: 0 1.25rem;
  ${media.lessThan(560)} {
    margin: 0.5rem auto;
  }
`

export function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <SLayout>
      {children}
    </SLayout>
  )
}
