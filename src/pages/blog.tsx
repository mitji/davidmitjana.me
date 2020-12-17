import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Layout, PostPreview } from '../components';
import { SH1 } from '../elements';

export default function Blog() {

  const [posts, setPosts] = useState<Array<object> | null>(null);

  const data = useStaticQuery(graphql`
    query {
      allMdx ( sort: {fields: frontmatter___date, order: DESC} ) {
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

  useEffect(() => {
    setPosts(data.allMdx.edges);
  }, [data]);

  return (
    <Layout>
      <SH1>Posts</SH1>
      {posts && (
        // TO DO: define post type
        posts.map((edge: any) => {
          const postData = edge.node.frontmatter;
          return (
            <PostPreview 
              date={postData.date}
              excerpt={postData.excerpt}
              timeToRead={edge.node.timeToRead}
              title={postData.title}
              to={postData.slug}
              key={edge.node.id}
            />
          )
        })
      )}
    </Layout>
  )
}
