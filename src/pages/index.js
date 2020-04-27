import React from "react"
import { graphql, Link } from "gatsby"
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

const Blog = styled.section`
  & {
    background-color: #e8e6e1;
    padding: 4px 24px;
  }
`

const BlogPostCard = styled.div`
  & {
    background-color: #faf9f7;
    margin: 24px 0;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1);
    border-top: 3px solid hsl(360, 64%, 55%);
  }
  & > h3,
  & > p {
    font-family: "Roboto";
    font-size: 18px;
    color: hsl(42, 15%, 13%);
    margin: 0;
  }
  & > p {
    margin: 16px 0;
    color: hsl(41, 9%, 35%);
  }
`

const CardControls = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  p {
    color: hsl(41, 8%, 61%);
    display: inline;
    margin: 0;
  }
  a {
    all: unset;
    background-color: hsl(44, 92%, 63%);
    color: hsl(42, 15%, 13%);
    padding: 12px 0;
    border-radius: 100px;
    box-shadow: inset 0 1px 0 hsl(48, 95%, 76%), 0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    display: block;
    width: 128px;
    text-align: center;
    cursor: pointer;
    font-family: "Nunito";
    font-size: 18px;
  }
  a:active {
    box-shadow: none;
  }
`

const IndexPage = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
    allMarkdownRemark: { nodes },
  },
}) => (
  <Layout>
    <SEO title="Home" description="Dillon Morse's website" />
    <Hero>
      <p>
        <b>Dillon</b> blogs about <b>computer programming</b> and{" "}
        <b>literature</b>
      </p>
      <HeroImage fluid={fluid} />
    </Hero>
    <Blog>
      {nodes.map(({ excerpt, frontmatter: { date, path, title } }) => (
        <BlogPostCard>
          <h3>{title}</h3>
          <p>{excerpt}</p>
          <CardControls>
            <p>{date}</p>
            <Link to={path}>Read More</Link>
          </CardControls>
        </BlogPostCard>
      ))}
    </Blog>
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
    allMarkdownRemark {
      nodes {
        excerpt
        frontmatter {
          date
          path
          title
        }
      }
    }
  }
`
