import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export function Avatar() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "davidmitji.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  
  return <Img fluid={data.file.childImageSharp.fluid} alt="Avatar Drawing" />
}
