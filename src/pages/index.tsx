import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { SH4 } from '../elements';
import { Intro, Layout, PostPreview } from '../components';
import { media } from '../utils';

const arrowKeyframe = keyframes`
  from {
    transform: translate3d(-0.85rem,-53%,0);
  }
  to {
    transform: translate3d(-0.5rem,-53%,0);
  }
`

const SiteSettingsBanner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(to right top, #64a1f6, #90ffe1);
  font-weight: 700;
  border-radius: 3px;
  p {
    font-size: 1.5rem;
    color: var(--color-title);
  }
  a {
    font-size: 1.125rem;
    padding: 0.5rem 2rem 0.5rem 0.75rem;
    color: #64a1f6;
    background: #ffffff;
    border-radius: 5px;
    transition: 0.3s;
    position: relative;
    box-shadow: 4px 4px 2px 1px #e1e1e1;
    &:after {
      content: '>';
      position: absolute;
      right: 0;
      top: 50%;
      opacity: 1;
      transform: translate3d(-0.85rem,-53%,0);
      transition: 0.5s;
    }
    &:hover {
      padding-right: 2rem;
      &:after {
        animation: ${arrowKeyframe} 0.8s infinite ease-in alternate;
      }
    }
    &:active {
      transform: translate3d(3px,3px,0);
      box-shadow: 0px 0px 0px 0px #e1e1e1;
    }
    ${media.lessThan(680)} {
      margin-top: 0.75rem;
    }
  }
  ${media.lessThan(680)} {
    border-radius: 0px;
    flex-direction: column;
    width: calc(100% + 2.5rem);
    transform: translate3d(-1.25rem, 0, 0);
    align-items: flex-start;
    padding: 2.5rem 1.25rem;
  }
`

export default function Home() {
  // query last three posts
  const data = useStaticQuery(graphql`
    query {
      allMdx ( limit: 3, sort: {fields: frontmatter___date, order: DESC} ) {
        edges {
          node {
            frontmatter {
              title
              slug
              excerpt
              date(formatString: "DD MMM YYYY")
            }
            id
            timeToRead
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Intro />
      <SH4 border>Latest Posts</SH4>
      {data && (
        // TO DO: define post type
        data.allMdx.edges.map((edge: any) => {
          const postData = edge.node.frontmatter;
          return (
            <PostPreview 
              date={postData.date}
              excerpt={postData.excerpt}
              timeToRead={edge.node.timeToRead}
              title={postData.title}
              to={`blog/${postData.slug}`}
              key={edge.node.id}
            />
          )
        })
      )}
      <SH4 border>Projects</SH4>

      <SiteSettingsBanner>
        <p>This site has customizable settings.</p>
        <Link to="settings">Check it out</Link>
      </SiteSettingsBanner>
    </Layout>
  )
}
