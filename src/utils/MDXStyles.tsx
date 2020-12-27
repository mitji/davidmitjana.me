import React from 'react';
import { MDXProvider } from '@mdx-js/react'
import { InnerLink, List, SText, OuterLink } from '../elements';

export function MDXStyles(props: {children: React.ReactNode}) {
  const { children } = props;

  return (
    <MDXProvider
      components={{
        // eslint-disable-next-line react/jsx-props-no-spreading
        p: (props) => <SText {...props} />,
        // eslint-disable-next-line jsx-a11y/heading-has-content,react/jsx-props-no-spreading
        h2: (props) => <h2 {...props} style={{ color: 'var(--color-title)'}} />,
        // eslint-disable-next-line react/jsx-props-no-spreading
        ul: (props) => <List {...props} />,
        // eslint-disable-next-line react/jsx-props-no-spreading
        a: (props) => <OuterLink {...props} underline />,
        OuterLink,
        InnerLink
      }}
    >
      {children}
    </MDXProvider>
  )
}
