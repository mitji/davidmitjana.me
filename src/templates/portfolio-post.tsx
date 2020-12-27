import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import { SH1, SText, BackBtn } from '../elements';
import { Layout } from '../components';
import { media } from '../utils';

export const query = graphql`
  query($id: String!) {
    content: mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        tech
        excerpt
        date(formatString: "DD MMM YYYY")
        logoUrl
        projectUrl
        githubUrl
      }
    }
    images: allFile(filter: {relativeDirectory: { eq: "portfolio"}}) {
      edges {
        node {
          relativeDirectory
          relativePath
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

const PostHeader = styled.div`
  display: flex;
  margin: 1.5rem 0 2rem;
  ${media.lessThan(560)} {
    flex-wrap: wrap;
  }
  .project {
    &__year {
      color: var(--color-text);
    } 
    &__img {
      .gatsby-image-wrapper{
        width: 195px;
        margin-right: 1rem;
      }
    }
    &__info {
      display: flex;
      flex-direction: column;
      ${media.lessThan(560)} {
        margin-top: 1rem;
      }
      .links {
        display: flex;
        margin-top: auto;
        a {
          border-radius: 5px;
          padding: 0.5rem 1rem;
          background: #eaebec;
          color: #0e2639;
          font-weight: bold;
          transition: 0.3s;
          &:first-of-type {
            margin-right: 0.75rem;
          }
          &:hover {
            background: #c6e5ff;
          }
        }
      }
    }
  }
`

export default function PortfolioPost(props: { data: any }) {
  const { data } = props;
  const post = data.content;
  const {images} = data;
  return (
    <Layout>
      <div>
        <BackBtn to="/portfolio">Back to portfolio</BackBtn>
        <PostHeader>
          <div className="project__img">
            {images && (
              images.edges.map((img:any) => {
                if (img.node.relativePath === post.frontmatter.logoUrl) {
                  return <Img fluid={img.node.childImageSharp.fluid} alt="Project logo" />
                }
                return null
              })
            )}
          </div>
          <div className="project__info">
            <span className="project__year"> 
              {' '}
              {post.frontmatter.date.split(' ')[2]}
            </span>
            <SH1>{post.frontmatter.title}</SH1>
            <div className="links">
              <a href={post.frontmatter.githubUrl} target="_blank" rel="noreferrer">Github</a>
              <a href={post.frontmatter.projectUrl} target="_blank" rel="noreferrer">Visit</a>
            </div>
          </div>
        </PostHeader>
        <SText>
          <b>Tech: </b>
          {post.frontmatter.tech}
        </SText>
        <SText color="var(--color-textGray)">{post.frontmatter.excerpt}</SText>
        <MDXRenderer>
          {post.body}
        </MDXRenderer>
      </div>
    </Layout>
  )
}
