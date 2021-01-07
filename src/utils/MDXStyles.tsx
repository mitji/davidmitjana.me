import React from 'react';
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils';
import { InnerLink, Ul, Ol, SText, SH4, OuterLink, Code } from '../elements';

export function MDXStyles(props: {children: React.ReactNode}) {
  const { children } = props;

  return (
    <MDXProvider
      components={{
        // eslint-disable-next-line react/jsx-props-no-spreading
        p: (props) => <SText {...props} className="readable-text" />,
        // eslint-disable-next-line react/jsx-props-no-spreading
        ul: (props) => <Ul {...props} className="readable-text" />,
        // eslint-disable-next-line react/jsx-props-no-spreading
        ol: (props) => <Ol {...props} className="readable-text" />,
        // eslint-disable-next-line react/jsx-props-no-spreading
        a: (props) => <OuterLink {...props} className="readable-text" target="_blank" rel="noreferrer" inline />,
        // eslint-disable-next-line react/jsx-props-no-spreading
        h4: (props) => <SH4 {...props} margin="2rem 0 1rem" className="readable-title" />,
        // eslint-disable-next-line react/jsx-props-no-spreading
        pre: preProps => {
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const props = preToCodeBlock(preProps);
          // if there's a codeString and some props, we passed the test
          if (props) {
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <Code {...props} />;
          } 
          // it's possible to have a pre without a code in it
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <pre {...preProps} />;
        },
        OuterLink,
        InnerLink,
        SH4,
      }}
    >
      {children}
    </MDXProvider>
  )
}
