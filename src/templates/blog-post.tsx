import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { BackBtn, SH1 } from '../elements';
import { Layout } from '../components';

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      timeToRead
      frontmatter {
        title
        excerpt
        date(formatString: "DD MMM YYYY")
      }
    }
  }
`

const PostInfo = styled.span`
  color: var(--color-text);
`

export default function BlogPost(props: { data: any }) {
  const { data } = props;
  const post = data.mdx;
  return (
    <Layout>
      <div>
        <BackBtn to="/blog">Back to blog</BackBtn>
        <SH1 style={{marginTop: '2rem'}}>{post.frontmatter.title}</SH1>
        <PostInfo>
          {post.frontmatter.date}
          {' '}
          ·
          {' '}
          {post.timeToRead}
          {' '}
          min read
        </PostInfo>
        <br />
        <br />
        <MDXRenderer>
          {post.body}
        </MDXRenderer>
      </div>
      {/* {post.timeToRead > 1 ? <ScrollTop /> : null} */}
    </Layout>
  )
}
