import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackIcon from "../icons/icon-cheveron-left-circle.svg"

const chopUriPrefix = str => str?.match(/\w+:\/\/(.*)/)?.[1]

const Title = styled.h1`
  & {
    margin-top: 96px;
    margin-bottom: 0;
    font-family: "Josefin Sans";
    font-size: 30px;
  }
`

const ArticleDate = styled.p`
  & {
    font-family: "Roboto";
    font-size: 16px;
    color: hsl(41, 9%, 35%);
    margin-bottom: 16px;
  }
`

const ImageCredit = styled.p`
  & {
    font-family: "Roboto";
    font-size: 16px;
    color: hsl(41, 9%, 35%);
  }
  a {
    all: unset;
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
`

const Article = styled.article`
  & {
    width: 35em;
    max-width: 100%;
  }
  p {
    font-family: "Roboto";
    font-size: 16px;
  }
`

const Container = styled.div`
  & {
    padding: 0 32px;
  }
`

const Image = styled(Img)`
  & {
    position: relative;
  }
  &::after {
    content: "";
    box-shadow: inset 0 0 0 1px hsl(40, 15%, 80%);
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const AppBar = styled.nav`
  & {
    background-color: hsl(40, 23%, 97%);
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 2;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1);
  }
  a {
    all: unset;
    cursor: pointer;
    font-family: "Nunito";
    font-size: 20px;
    color: hsl(360, 67%, 44%);
    display: flex;
    align-items: center;
  }
  b {
    font-size: 48px;
  }
  svg {
    width: 32px;
    height: 32px;
  }
  svg .primary {
    fill: hsl(40, 23%, 97%);
  }
  svg .secondary {
    fill: hsl(360, 67%, 44%);
  }
`

export default ({
  data: {
    excerpt,
    file: {
      childImageSharp: { fluid },
    },
    markdownRemark: {
      frontmatter: { date, title, imageCredit, imageCreditLink },
      html,
    },
  },
}) => (
  <Layout appBarTitle="Blog">
    <AppBar>
      <Link to={"/"}>
        <BackIcon /> Back to Blog
      </Link>
    </AppBar>
    <Container>
      <SEO title={title} description={excerpt} />
      <Title>{title}</Title>
      <ArticleDate>{date}</ArticleDate>
      <Image fluid={fluid} />
      <ImageCredit>
        Image credit: {imageCredit}{" "}
        <Link to={imageCreditLink}>({chopUriPrefix(imageCreditLink)})</Link>
      </ImageCredit>
      <Article dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query($image: String!, $path: String!) {
    file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(srcSetBreakpoints: [400, 600, 960, 1280]) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        imageCredit
        imageCreditLink
        path
        title
      }
      html
    }
  }
`
