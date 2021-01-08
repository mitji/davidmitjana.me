import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import { BackBtn, OuterLink, SH1, SText } from '../elements';
import { Layout, SEO } from '../components';
import { media } from '../utils';

export const query = graphql`
  query($id: String!, $dir: String!) {
    content: mdx(id: { eq: $id }) {
      body
      timeToRead
      frontmatter {
        title
        excerpt
        rawDate: date
        date: date(formatString: "DD MMM YYYY")
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
          publicURL
        }
      }
    }
  }
`

const PostInfo = styled.p`
  color: var(--color-text);
  margin: 0.5rem 0 2rem;
`

const HeaderImgWrapper = styled.div`
  width: 100%;
  ${media.lessThan(710)} {
    width: calc(100% + 2.5rem);
    margin-left: -1.25rem;
  }
`

export default function BlogPost(props: { data: any }) {
  const { data } = props;
  const post = data.content;
  const {image} = data;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
        image={
          image.edges[0].node.childImageSharp
            ? image.edges[0].node.childImageSharp.fluid.src
            : image.edges[0].node.publicURL
        }
      />
      <div>
        <BackBtn to="/blog">Back to blog</BackBtn>
        <SH1 style={{margin: '2rem 0 0'}} className="readable-title">{post.frontmatter.title}</SH1>
        <SText color="var(--color-textGray)" style={{margin: '0'}}>{post.frontmatter.excerpt}</SText>
        <PostInfo>
          <time dateTime={post.frontmatter.rawDate}>{post.frontmatter.date}</time>
          {' '}
          ·
          {' '}
          {post.timeToRead}
          {' '}
          min read
        </PostInfo>
        <HeaderImgWrapper>
          {
            image.edges[0].node.childImageSharp
              ? <Img fluid={image.edges[0].node.childImageSharp.fluid} alt="Project logo" />
              : <img alt="Project logo" src={image.edges[0].node.publicURL} style={{width: '100%', marginBottom: '15px'}} />
          }
        </HeaderImgWrapper>
        <br />
        <br />
        <MDXRenderer>
          {post.body}
        </MDXRenderer>
        <SText color="var(--color-textGray)" style={{fontSize: '1rem', margin: '3rem 0 0'}}>
          <span role="img" aria-label="Megaphone" style={{marginRight: '0.5rem'}}>📣</span>
          <i>
            If you've found something missing, something wrong or something that could be improved in this post, please drop a pull request in 
            the
            {' '}
            <OuterLink href="https://github.com/mitji/davidmitjana.me/pulls" target="_blank" rel="noreferrer" inline>site's repo</OuterLink>
            {' '}
            or email me at
            {' '}
            <OuterLink href="mailto:contact@davidmitjana.me" inline underline>contact@davidmitjana.me</OuterLink>
            .
          </i>
        </SText>
      </div>
      {/* {post.timeToRead > 1 ? <ScrollTop /> : null} */}
    </Layout>
  )
}
