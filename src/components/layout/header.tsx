import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import Navbar from './header/navbar'

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

  return <Navbar />
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
