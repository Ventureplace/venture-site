module.exports = {
  siteMetadata: {
    title: "VenturePlace",
    description: "VenturePlace Site",
    author: "Kahlil Fitzgerald",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Roboto:400,900"],
        display: "swap",
      },
    },
  ],
};
