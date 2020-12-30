require('dotenv').config({path: '.env',});

module.exports = {
  siteMetadata: {
    title: 'David Mitjana Castro',
    description: 'Hi! I&apos;m David Mitjana, an Audiovisual Systems Engineer with a passion for web technologies',
    author: 'David Mitjana Castro',
    siteUrl: 'https://davidmitjana.me',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'David Mitjana Castro | Web Developer',
        short_name: 'davidmitjana.me',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#64a1f6',
        display: 'standalone',
        icon: 'src/assets/favicon.png'
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'portfolio',
        path: `${__dirname}/src/portfolio`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Lora:400,500,700,400i,500i,700i',
          'Roboto: 100,300,400,500,900,100i,300i,400i,500i,900i',
        ],
        display: 'swap'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          process.env.GA_TRACKING_ID,
        ],
      },
    },
  ],
};
