import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { SH1 } from '../elements';
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

export default function BlogPost(props: { data: any }) {
  const { data } = props;
  const post = data.mdx;
  return (
    <Layout>
      <div>
        <SH1>{post.frontmatter.title}</SH1>
        <span>
          {post.frontmatter.date}
          {' '}
          ·
          {' '}
          {post.timeToRead}
          {' '}
          min read
        </span>
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
