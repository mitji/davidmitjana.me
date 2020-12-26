import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { InnerLink, SH4 } from '../elements';
import { Intro, Layout, PostCard, ProjectCard } from '../components';
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
      <SectionHeader>
        <SH4 margin="0">Latest Posts</SH4>
        <InnerLink to="blog">
          View all
        </InnerLink>
      </SectionHeader>
      {/* <SH4 border>Latest Posts</SH4> */}
      {data && (
        // TO DO: define post type
        data.allMdx.edges.map((edge: any) => {
          const postData = edge.node.frontmatter;
          return (
            <PostCard 
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
      <SectionHeader>
        <SH4 margin="0">Projects</SH4>
        <InnerLink to="blog">
          View all
        </InnerLink>
      </SectionHeader>
      <ProjectCard
        date="2020"
        title="A Peu de Pista"
        description="Page for the candidacy of J.C. Mitjana for the Catalan Basketball Federation presidential elections."
        tech="react, styled-components, typescript"
        to="about"
        projectUrl="https://pre.apeudepista.cat"
        imgUrl="projects/apeudepista.jpeg"
      />
      <ProjectCard
        date="2020"
        title="Sentiment Analysis on BBC Proms tweets"
        description="Bacehlor's degree final project on Natural Language Processing"
        to="about"
        projectUrl="https://drive.google.com/file/d/11RC-__M7ppkxZsYe-eeT5xpp9TzoPzaZ/view"
        tech="python, scikit-learn, pytorch"
        imgUrl="projects/bbc-proms.jpg"
      />
      <ProjectCard
        date="2019"
        title="TE App"
        description="A cross-sport platform for sport coaches to prepare their training sessions easily."
        tech="react, scss, node.js, express.js, mongodb"
        to="about"
        projectUrl="https://te-app.herokuapp.com/"
        imgUrl="projects/te-app.png"
      />

      <SiteSettingsBanner>
        <p>This site has customizable settings.</p>
        <Link to="settings">Check it out</Link>
      </SiteSettingsBanner>
    </Layout>
  )
}
