/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Mitch's Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog/`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mead`,
        path: `${__dirname}/src/pages/val_comp/mead/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `food`,
        path: `${__dirname}/src/pages/val_comp/food/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `farm`,
        path: `${__dirname}/src/pages/val_comp/farm/`
      }
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: "DrupalGraqhQL",
        // This is field under which it's accessible
        fieldName: "Drupal",
        // Url to query from
        url: `https://csc496f24demo.tldr.dev/graphql`,
      },
    }
  ],
}
