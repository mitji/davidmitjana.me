import React from 'react';
import { MDXProvider } from '@mdx-js/react'
import { OuterLink, SText } from '../elements';

export function MDXStyles(props: {children: React.ReactNode}) {
  const { children } = props;

  return (
    <MDXProvider
      components={{
        // eslint-disable-next-line react/jsx-props-no-spreading
        p: (props) => <SText {...props} />,
        // eslint-disable-next-line jsx-a11y/heading-has-content,react/jsx-props-no-spreading
        h2: (props) => <h2 {...props} style={{ color: 'var(--color-title)'}} />,
        OuterLink
      }}
    >
      {children}
    </MDXProvider>
  )
}
