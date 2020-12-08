import React from 'react';
import styled from 'styled-components';

const SLayout = styled.div`
  max-width: 750px;
  margin: 4rem auto;
  padding: 0 1.25rem;
`

export function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <SLayout>
      {children}
    </SLayout>
  )
}
