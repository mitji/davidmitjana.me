import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import { BackBtn, Ul, SH1, SText, Tech, TechWrapper } from '../elements';
import { Layout, SEO } from '../components';
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
        demoUser {
          user
          pswd
        }
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
  margin: 1.5rem 0 2rem;
  .header-top {
    display: flex;
    ${media.lessThan(560)} {
      flex-wrap: wrap;
    }
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
          padding: 0.5rem 0.75rem;
          background: var(--color-innerCTAbg);
          color: var(--color-innerCTAtext);
          font-weight: bold;
          transition: 0.3s;
          ${media.lessThan(560)} {
            padding: 0.75rem 1.125rem;
          }
          &:first-of-type {
            margin-right: 0.75rem;
          }
          &:hover {
            background: #c6e5ff;
          }
        }
      }
    }
    &__tech {
      margin-top: 0.5rem;
    }
  }
`

export default function PortfolioPost(props: { data: any }) {
  const [headerImg, setHeaderImg] = useState<any>(null);
  const { data } = props;
  const post = data.content;
  const {images} = data;

  useEffect(() => {
    const image = images.edges.filter((img:any) => img.node.relativePath === post.frontmatter.logoUrl);
    setHeaderImg(image[0].node.childImageSharp);
  }, [images]);

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
        image={headerImg ? headerImg.fluid.src : null}
      />
      <div>
        <BackBtn to="/portfolio">Back to portfolio</BackBtn>
        <PostHeader>
          <div className="header-top">
            <div className="project__img">
              {headerImg && <Img fluid={headerImg.fluid} alt="Project logo" />}
            </div>
            <div className="project__info">
              <time
                dateTime={post.frontmatter.date.split(' ')[2]}
                className="project__year"
              > 
                {post.frontmatter.date.split(' ')[2]}
              </time>
              <SH1 className="readable-title">{post.frontmatter.title}</SH1>
              <div className="links">
                <a href={post.frontmatter.githubUrl} target="_blank" rel="noreferrer">Github</a>
                <a href={post.frontmatter.projectUrl} target="_blank" rel="noreferrer">Visit</a>
              </div>
            </div>
          </div>
          {post.frontmatter.tech && (
            <div className="project__tech">
              <TechWrapper>
                {post.frontmatter.tech.map((el:string, i: number) => <Tech key={i}>{el}</Tech>)}
              </TechWrapper>
            </div>
          )}
        </PostHeader>
        <SText color="var(--color-textGray)" style={{marginBottom: '0'}}>{post.frontmatter.excerpt}</SText>
        <br />
        <br />
        {post.frontmatter.demoUser && (
          <>
            <SText className="readable-text">Demo user:</SText>
            <Ul className="readable-text">
              <li>
                <b>user: </b>
                {post.frontmatter.demoUser.user}
              </li>
              <li>
                <b>password: </b>
                {post.frontmatter.demoUser.pswd}
              </li>
            </Ul>
          </>
        )}
        <MDXRenderer>
          {post.body}
        </MDXRenderer>
      </div>
    </Layout>
  )
}
