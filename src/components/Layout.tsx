import React from 'react';
import styled from 'styled-components';
import { media } from '../utils';

const SLayout = styled.div`
  max-width: 750px;
  width: 100%;
  margin: 4rem auto;
  padding: 0 1.25rem;
  flex-grow: 1;
  ${media.lessThan(560)} {
    margin: 2rem auto;
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
