import React from 'react';
import { MDXProvider } from '@mdx-js/react'
import { InnerLink, List, SText, SH4, OuterLink } from '../elements';

export function MDXStyles(props: {children: React.ReactNode}) {
  const { children } = props;

  return (
    <MDXProvider
      components={{
        // eslint-disable-next-line react/jsx-props-no-spreading
        p: (props) => <SText {...props} className="readable-text" />,
        // eslint-disable-next-line react/jsx-props-no-spreading
        ul: (props) => <List {...props} className="readable-text" />,
        // eslint-disable-next-line react/jsx-props-no-spreading
        a: (props) => <OuterLink {...props} className="readable-text" inline />,
        // eslint-disable-next-line react/jsx-props-no-spreading
        h4: (props) => <SH4 {...props} margin="2rem 0 1rem" className="readable-title" />,
        OuterLink,
        InnerLink,
        SH4
      }}
    >
      {children}
    </MDXProvider>
  )
}
