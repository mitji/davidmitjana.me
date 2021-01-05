import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    font-size: var(--font-size);
    height: 100%;
  }
  body {
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-width: thin;
    font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue', 'Helvetica', 'Arial';
    font-weight: normal;
    background: var(--color-backgroundBody);
  }
  body, footer, nav {
    transition: background 0.5s ease;
  }
  title, p, a {
    transition: color 0.4s ease 0.5;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  /* dynamic text & title fonts */
  .readable-text {
    font-family: var(--text-font);
  }
  .readable-title {
    font-family: var(--title-font);
  }

  /* Footer always at the bottom */
  #___gatsby {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  /** 
    Force 'main' content to occupy all remaining space, 
    which forces footer to be at the bottom
  */
  #gatsby-focus-wrapper {
    flex-grow: 1;
  }

  /**
  --- MODIFY SCROLLBAR ---
  **/
  @media only screen and (min-width: 560px) {
    /* width */
    &::-webkit-scrollbar {
      width: 12px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      border: 1px solid #64a1f6;
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #7f91b936;
    }
    
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #64a1f6;
    }
  }
`
