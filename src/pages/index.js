import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Hero = styled.section`
  & {
    position: relative;
  }
  p {
    position: absolute;
    z-index: 2;
    top: 96px;
    color: hsl(360, 77%, 78%);
    font-family: "Josefin Sans";
    font-size: 24px;
    text-align: center;
    line-height: 1.25;
  }
  b {
    color: hsl(40, 23%, 97%);
  }
`

const HeroImage = styled(Img)`
  & {
    height: 256px;
    object-fit: cover;
  }
`

const IndexPage = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <Layout>
    <SEO title="Home" description="Dillon Morse's website" />
    <Hero>
      <p>
        <b>Dillon Morse</b> blogs about <b>programming</b> and <b>literature</b>
      </p>
      <HeroImage fluid={fluid} />
    </Hero>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(srcSetBreakpoints: [400, 600, 960, 1280, 1920]) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
