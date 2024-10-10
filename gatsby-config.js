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
        path: `./data/`
      }
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: "DrupalGraqhQL",
        // This is field under which it's accessible
        fieldName: "allDrupalNodeArtRec",
        // Url to query from
        // url: "http://kecatalog.dev.wwbtc.com/graphql",
        //  url: `http://10.89.0.11/graphql`,
        //url: `https://api.keeneland.com/graphql`,
        // url: "http://10.89.0.24/graphql",
        url: `https://csc496f24demo.tldr.dev/graphql`,
      }
    },
    `gatsby-plugin-styled-components`
  ],
}
