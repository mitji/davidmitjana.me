import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Tech, TechWrapper } from '../elements';
import { media } from '../utils';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  box-shadow: 2px 2px 8px -2px var(--color-boxShadow);
  transition: 0.3s;
  border-radius: 3px;
  #gatsby_link {
    display: flex;
    padding: 1rem;
  }
  #project_link {
    display: flex;
    position: absolute;
    top: 14px;
    right: 14px;
    /* padding: 2px 2px 0 0; */
  }
  h2 {
    color: var(--color-title);
    ${media.lessThan(560)} {
      max-width: 80%;
    }
  }
  p, time {
    color: var(--color-textGray);
  }
  .project {
    &__img {
      .gatsby-image-wrapper{
        width: 180px;
        margin-right: 1rem;
      }
      ${media.lessThan(560)} {
        display: none;
      }
    }
    &__info {
      display: flex;
      flex-direction: column;
      .date {
        font-size: 0.875rem;
        margin-bottom: 1rem;
      }
      .description {
        font-size: 1.125rem;
        margin: 0.5rem 0 0;
      }
      .tech {
        display: flex;
        flex-wrap: wrap;
        margin: auto 0 0;
        ${media.lessThan(650)} {
          margin-top: 0.875rem;
        }
      }
    }
  }
  svg {
    width: 0.75rem;
    margin: -10px 0 -2px;
    path {
      fill: #009BF9;
    }
  }
  &:hover {
    box-shadow: 2px 5px 12px 3px var(--color-boxShadow);
  }
`

const Url = styled.a`
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  background: var(--color-innerCTAbg);
  color: var(--color-innerCTAtext);
  font-weight: bold;
  transition: 0.3s;
  &:first-of-type {
    margin-right: 0.75rem;
  }
  &:hover {
    background: #c6e5ff;
  }
`

type PostCardProps = {
  date: string,
  description: string,
  title: string,
  tech?: Array<string>,
  to: string,
  projectUrl: string,
  logoUrl?: string
}

export function ProjectCard(props: PostCardProps) {
  const { date, description, title, tech, to, projectUrl, logoUrl } = props;

  return (
    <Wrapper>
      <Link to={to} id="gatsby_link">
        <div className="project__img">
          <StaticQuery
            query={graphql`
              query {
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
            `}
            render={({images}) => {
              const image = images.edges.find((img:any) => img.node.relativePath === logoUrl);
              return <Img fluid={image.node.childImageSharp.fluid} alt="Project logo" />
            }}
          />
        </div>
        <div className="project__info">
          <time dateTime={date} className="date">
            {date}
          </time>
          <h2>{title}</h2>
          <p className="description">
            {description}
          </p>
          { tech && (
            <div className="tech">
              <TechWrapper>
                {tech.map((el:string, i:number) => <Tech key={i}>{el}</Tech>)}
              </TechWrapper>
            </div>
          )}
        </div>
      </Link>

      <Url href={projectUrl} target="_blank" rel="noreferrer" id="project_link">
        Visit&nbsp;
        {/* <Openlink /> */}
      </Url>
    </Wrapper>
  )
}


