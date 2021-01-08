import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 2px 2px 8px -2px var(--color-boxShadow);
  transition: 0.3s;
  border-radius: 3px;
  h2 {
    color: var(--color-title);
  }
  p {
    color: var(--color-textGray);
  }
  .post {
    &__info {
      font-size: 0.875rem;
      margin-bottom: 1.25rem;
    }
    &__excerpt {
      font-size: 1.125rem;
      margin-top: 0.5rem;
    }
  }
  &:hover {
    box-shadow: 2px 5px 12px 3px var(--color-boxShadow);
  }
`

type PostCardProps = {
  date: string,
  rawDate: string,
  excerpt: string,
  timeToRead: number,
  title: string,
  to: string,
  tags?: Array<string>
}

export function PostCard(props: PostCardProps) {
  const { date, excerpt, rawDate, tags, timeToRead, title, to} = props;
  return (
    <Link to={to}>
      <Wrapper>
        <p className="post__info">
          <time dateTime={rawDate}>{date}</time>
          {' '}
          · 
          {' '}
          {timeToRead}
          {' '}
          min read
        </p>
        <h2>{title}</h2>
       
        <p className="post__excerpt">{excerpt}</p>
      </Wrapper>
    </Link>
  )
}


