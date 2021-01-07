import React from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

type CodeProps = {
  codeString: any;
  language: Language;
  className: any;
  style: any;
  tokens: any;
  getLineProps: any;
  getTokenProps: any;
}

export const Code = (props: CodeProps) => {
  const {
    codeString,
    language,
    className,
    style,
    tokens,
    getLineProps,
    getTokenProps
  } = props;
  return (
    <Highlight
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({className,style,tokens,getLineProps,getTokenProps}) => (
        <pre className={className} style={style}>
          {tokens.map((line: any, i: number) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <div {...getLineProps({ line, key: i })}>
              {line.map((token: any, key: any) => (
                <span
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...getTokenProps({ token, key })}
                />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
