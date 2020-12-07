import React from 'react';
import styled from 'styled-components';

const SLayout = styled.div`
  max-width: 750px;
  margin: 3rem auto;
  padding: 0 1rem;
`

export function Layout(props: { children: JSX.Element }) {
  const { children } = props;
  return (
    <SLayout>
      {children}
    </SLayout>
  )
}
