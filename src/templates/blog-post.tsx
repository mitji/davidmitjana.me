import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import { BackBtn, SH1, SText } from '../elements';
import { Layout } from '../components';

export const query = graphql`
  query($id: String!, $dir: String!) {
    content: mdx(id: { eq: $id }) {
      body
      timeToRead
      frontmatter {
        title
        excerpt
        date(formatString: "DD MMM YYYY")
      }
    }
    image: allFile(
      filter: {
        relativeDirectory: { eq: $dir },
        extension: {regex: "/(jpeg|jpg|gif|png)/"}
        name: {eq: "header"}
      }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const PostInfo = styled.p`
  color: var(--color-text);
  margin: 0.5rem 0 2rem;
`

export default function BlogPost(props: { data: any }) {
  const { data } = props;
  console.log(data)
  const post = data.content;
  const {image} = data;
  return (
    <Layout>
      <div>
        <BackBtn to="/blog">Back to blog</BackBtn>
        <SH1 style={{margin: '2rem 0 0'}}>{post.frontmatter.title}</SH1>
        <SText color="var(--color-textGray)" style={{margin: '0'}}>{post.frontmatter.excerpt}</SText>
        <PostInfo>
          {post.frontmatter.date}
          {' '}
          ·
          {' '}
          {post.timeToRead}
          {' '}
          min read
        </PostInfo>
        <Img fluid={image.edges[0].node.childImageSharp.fluid} alt="Project logo" />
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
