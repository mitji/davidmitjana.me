import React, { useContext } from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import { Tech, TechWrapper } from '../elements';
import { media, AppContext } from '../utils';

const Wrapper = styled.div<{theme: string}>`
  padding: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: ${props => props.theme === 'dark' ? undefined : '2px 2px 8px -2px var(--color-boxShadow)'};
  transition: 0.3s;
  border-radius: ${props => props.theme === 'dark' ? undefined : '3px'};
  /* background: ${props => props.theme === 'dark' ? 'var(--color-backgroundFooter)' : undefined}; */
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
    box-shadow: ${props => props.theme === 'dark' ? '-2px 0px 0px 0px #ffffff' : '2px 5px 12px 3px var(--color-boxShadow)'};
    transform: ${props => props.theme === 'dark' ? 'translate3d(0, -0.25rem, 0)' : undefined};
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
  const { theme } = useContext(AppContext);
  return (
    <Link to={to}>
      <Wrapper theme={theme}>
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


