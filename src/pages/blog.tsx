import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Layout, PostPreview } from '../components';
import { SH1, SText } from '../elements';

export default function Blog() {

  const [posts, setPosts] = useState<Array<object> | null>(null);

  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              slug
              excerpt
              date(formatString: "DD MMM YYYY")
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
      <SH1>Blog</SH1>
      {posts && (
        // define post type
        posts.map((edge: any, i) => {
          const postData = edge.node.frontmatter;
          return (
            <PostPreview 
              date={postData.date}
              excerpt={postData.excerpt}
              timeToRead={2}
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
