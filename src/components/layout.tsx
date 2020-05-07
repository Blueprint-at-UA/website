/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { addDarkMode } from './layout/darkmodehandler'

import Navbar from './layout/Navbar'
import './layout/layout.css'

const Layout: React.FC = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	useEffect(addDarkMode)

	return (
		<>
			<Navbar />
			{children}
			<footer className='bg-black text-white py-24'>
				<div className='container mx-auto'>
					© {new Date().getFullYear()} Blueprint at UA.
				</div>
			</footer>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
