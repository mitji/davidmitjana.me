import React from 'react';
import { MDXProvider } from '@mdx-js/react'
import { OuterLink, SText } from '../elements';

export function MDXStyles(props: {children: React.ReactNode}) {
  const { children } = props;

  return (
    <MDXProvider
      components={{
        p: (props) => <SText {...props} />,
        OuterLink
      }}
    >
      {children}
    </MDXProvider>
  )
}
