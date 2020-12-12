import React from 'react';
import { graphql, useStaticQuery} from 'gatsby';
import { SH4 } from '../elements';
import { useHasMounted } from '../hooks';
import { Intro, Layout, PostPreview } from '../components';

export default function Home() {
  const hasMounted = useHasMounted();

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
    </Layout>
  )
}
