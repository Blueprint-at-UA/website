import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

interface HeaderProps {
  siteTitle: string
}

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(height: 35) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const data = useStaticQuery(query)

  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <Img fixed={data.file.childImageSharp.fixed} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Link to="/" className="nav-link" activeClassName="active">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about" className="nav-link" activeClassName="active">
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/apply" className="nav-link" activeClassName="active">
                Apply
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className="nav-link" activeClassName="active">
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
