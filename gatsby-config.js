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
    `gatsby-plugin-styled-components`,
    { /* 
        link val_comp submodule data folder to
        main site's data layer
      */
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/val_comp/data`
      }
    },
    { /*  
        used to prevent main site from creating unwanted 
        pages from val_comp submodule 
      */
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [
          `**/val_comp/gatsby-*.js`,
          `**/val_comp/src/pages/404.js`,
          `**/val_comp/src/components/**`,
          `**/val_comp/public/**`,
          `**/val_comp/.cache/**`
        ],
      },
    },
  ],
};