import React from "react"
import { Container, Button } from "react-bootstrap"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const query = graphql`
  query {
    shelby: file(relativePath: { eq: "backdrop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

const MainHeader = () => {
  const data = useStaticQuery(query)

  return (
    <BackgroundImage
      Tag="div"
      fluid={[
        "linear-gradient(rgba(0, 120, 232, 0), rgba(0, 120, 232, 0.9))",
        data.shelby.childImageSharp.fluid,
      ]}
      className="py-9 bg-primary fixed-background"
      style={{
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
      }}
    >
      <Container className="animated fadeIn">
        <h1 className="display-5 text-white">Tech for social good.</h1>
        <p className="lead text-white">
          We make technology accessible for those that do good and bring about
          social change.
        </p>
        <Link to="/about">
          <Button size="lg" variant="outline-light">
            Learn more
          </Button>
        </Link>
      </Container>
    </BackgroundImage>
  )
}

export default MainHeader
