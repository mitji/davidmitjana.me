module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'David Mitjana Castro | Frontend Developer',
        short_name: 'davidmitjana.me',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#64a1f6',
        display: 'standalone',
        icon: 'src/assets/favicon.png'
      },
    },
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
        name: 'assets',
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Lora:400,500,700',
          'Source Sans Pro:200,300,400,900',
          'Open Sans:300,400,800',
          'Roboto: 100,300,400,500,900,100i,300i,400i,500i,900i',
          'Montserrat:900'
        ],
        display: 'swap'
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        icon: `${__dirname}/src/assets/favicon.ico`
      }
    },

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
    'gatsby-plugin-styled-components'
  ],
};
