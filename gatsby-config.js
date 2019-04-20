module.exports = {
  pathPrefix: "/receipt-calculator",
  siteMetadata: {
    title: `Receipt Calculator`,
    description: `Gatsby site for splitting receipts`,
    author: `@herzo175`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
