import React from "react";
import { Box } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import "../css/alpha-gradient.css";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "header.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const headerImage = getImage(data.file);

  return (
    <Box
      className="alpha-gradient-container"
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <GatsbyImage
        image={headerImage}
        alt="Header image"
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
          position: "relative",
        }}
      />
    </Box>
  );
};

export default Header;
