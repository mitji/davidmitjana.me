import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { InnerLink, SH4 } from '../elements';
import { Intro, Layout, PostCard, ProjectCard, SEO } from '../components';
import { media } from '../utils';

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e1e1e1;
  margin: 3rem 0 2rem;
  padding-bottom: 1rem;
  align-items: flex-end;
  a {
    color: var(--color-text);
    :after {
      opacity: 0 !important;
    }
    &:hover {
      &:after {
        opacity: 1 !important;
      }
    }
  }
`

const arrowKeyframe = keyframes`
  from {
    transform: translate3d(-0.85rem,-51%,0);
  }
  to {
    transform: translate3d(-0.5rem,-51%,0);
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
    box-shadow: 4px 4px 0px 1px #e1e1e1;
    &:after {
      content: '>';
      position: absolute;
      right: 0;
      top: 50%;
      opacity: 1;
      transform: translate3d(-0.85rem,-51%,0);
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
      blog: allMdx (
        filter: { fields: { type: { eq: "blog" } } }
        limit: 3, sort: {fields: frontmatter___date, order: DESC}
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              excerpt
              rawDate: date
              date(formatString: "DD MMM YYYY")
            }
            id
            timeToRead
          }
        }
      }
      portfolio: allMdx (
        filter: { fields: { type: { eq: "portfolio" } } }
        limit: 3, sort: {fields: frontmatter___date, order: DESC}
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              slug
              excerpt
              date: date(formatString: "DD MMM YYYY")
              projectUrl
              logoUrl
            }
            id
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <Intro />
      <SectionHeader>
        <SH4 margin="0">Latest Posts</SH4>
        <InnerLink to="blog" onClick={() => typeof window !== 'undefined' && window.gtag('event', 'click', { ...data })}>
          View all
        </InnerLink>
      </SectionHeader>
      {/* <SH4 border>Latest Posts</SH4> */}
      {data && (
        // TO DO: define post type
        data.blog.edges.map((edge: any) => {
          const postData = edge.node.frontmatter;
          return (
            <PostCard 
              date={postData.date}
              excerpt={postData.excerpt}
              rawDate={postData.rawDate}
              timeToRead={edge.node.timeToRead}
              title={postData.title}
              to={`blog/${postData.slug}`}
              key={edge.node.id}
            />
          )
        })
      )}
      <SectionHeader>
        <SH4 margin="0">Projects</SH4>
        <InnerLink to="portfolio">
          View all
        </InnerLink>
      </SectionHeader>
      {data && (
        // TO DO: define post type
        data.portfolio.edges.map((edge: any) => {
          const postData = edge.node.frontmatter;
          return (
            <ProjectCard 
              date={postData.date.split(' ')[2]}
              description={postData.excerpt}
              title={postData.title}
              tech={postData.tech}
              to={`portfolio/${postData.slug}`}
              key={edge.node.id}
              projectUrl={postData.projectUrl}
              logoUrl={postData.logoUrl}
            />
          )
        })
      )}

      <SiteSettingsBanner>
        <p>This site has customizable settings.</p>
        <Link to="settings" onClick={() => typeof window !== 'undefined' && window.gtag('event', 'inbound_settings_banner', { from: 'banner' })}>
          Check it out
        </Link>
      </SiteSettingsBanner>
    </Layout>
  )
}
