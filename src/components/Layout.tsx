import React from 'react';
import styled from 'styled-components';
import {useHasMounted } from '../hooks';
import { media } from '../utils';

const SLayout = styled.div`
  max-width: 750px;
  margin: 4rem auto;
  padding: 0 1.25rem;
  ${media.lessThan(560)} {
    margin: 2rem auto;
  }
`

export function Layout(props: { children: React.ReactNode }) {
  const hasMounted = useHasMounted();
  const { children } = props;
  return (
    <SLayout>
      {hasMounted ? (
        {children}
      ) : null}
    </SLayout>
  )
}
