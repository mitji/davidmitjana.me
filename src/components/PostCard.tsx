import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import { Tech, TechWrapper } from '../elements';
import { media } from '../utils';

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
      margin-bottom: 1rem;
    }
    &__excerpt {
      font-size: 1.125rem;
      margin-top: 0.5rem;
    }
    &__tags {
      display: flex;
      flex-wrap: wrap;
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
  tags?: Array<string>,
  title: string,
  to: string,
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
        { tags && (
          <div className="post__tags">
            <TechWrapper>
              {tags.map((el:string, i:number) => <Tech key={i}>{el}</Tech>)}
            </TechWrapper>
          </div>
        )}
      </Wrapper>
    </Link>
  )
}


