import React from 'react';
import { Link, graphql } from 'gatsby';
import { SH4 } from '../elements';
import { Intro, Layout, PostPreview } from '../components';

export default function Home() {
  return (
    <>
      <Layout>
        <Intro />
        <SH4>Latest Posts</SH4>
        <PostPreview
          date="15 Sep 2020"
          excerpt="This is the description of the post"
          timeToRead={2}
          title="Hello World"
          to="/hello-world"
        />
        <PostPreview
          date="15 Sep 2020"
          excerpt="This is the description of the post"
          timeToRead={2}
          title="Hello World"
          to="/hello-world"
        />
        <PostPreview
          date="15 Sep 2020"
          excerpt="This is the description of the post"
          timeToRead={2}
          title="Hello World"
          to="/hello-world"
        />
        <SH4>Projects</SH4>
      </Layout>
    </>
  )
}
