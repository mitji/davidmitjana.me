import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Layout, ProjectCard } from '../components';
import { SH1 } from '../elements';

export default function Portfolio() {

  const [posts, setPosts] = useState<Array<object> | null>(null);

  const data = useStaticQuery(graphql`
    query {
      allMdx (
        filter: { fields: { type: { eq: "portfolio" } } }
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              slug
              excerpt
              date(formatString: "DD MMM YYYY")
              projectUrl
              logoUrl
            }
            id
          }
        }
      }
    }
  `);

  useEffect(() => {
    setPosts(data.allMdx.edges);
  }, [data]);

  return (
    <Layout>
      <SH1>Projects I've built</SH1>
      {posts && (
        posts.map((edge: any) => {
          const postData = edge.node.frontmatter;
          return (
            <ProjectCard 
              date={postData.date.split(' ')[2]}
              description={postData.excerpt}
              title={postData.title}
              tech={postData.tech}
              to={postData.slug}
              key={edge.node.id}
              projectUrl={postData.projectUrl}
              logoUrl={postData.logoUrl}
            />
          )
        })
      )}
    </Layout>
  )
}
