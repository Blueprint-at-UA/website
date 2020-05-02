import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useDarkMode } from '../darkmodehandler'

const query = graphql`
	query {
		dark: file(relativePath: { eq: "logo-dark.png" }) {
			childImageSharp {
				fixed(width: 200) {
					...GatsbyImageSharpFixed_withWebp_noBase64
				}
			}
		}
		light: file(relativePath: { eq: "logo-light.png" }) {
			childImageSharp {
				fixed(width: 200) {
					...GatsbyImageSharpFixed_withWebp_noBase64
				}
			}
		}
	}
`

const Item: React.FC = props => (
	<li className='mt-3 md:mt-0 md:mr-5 text-gray-600 hover:text-black dark:text-gray-400 dark-hover:text-white'>
		{props.children}
	</li>
)

const Navbar = () => {
	const data = useStaticQuery(query)
	const [active, setActive] = useState(false)
	const dark = useDarkMode()

	return (
		<nav className='sticky w-full top-0 r-0 z-10 bg-white p-5 border-b border-gray-200 dark:bg-black dark:border-gray-800'>
			<div className='container mx-auto md:flex flex-row md:justify-between items-center'>
				<div className='flex flex-row justify-between'>
					<Link to='/'>
						{dark ? (
							<Img fixed={data.light.childImageSharp.fixed} />
						) : (
							<Img fixed={data.dark.childImageSharp.fixed} />
						)}
					</Link>
					<button
						onClick={() => setActive(p => !p)}
						className='md:hidden flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'
					>
						<svg
							className='fill-current h-3 w-3'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<title>Menu</title>
							<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
						</svg>
					</button>
				</div>
				<ul
					className={`${
						active ? 'block' : 'hidden'
					} md:flex md:flex-row md:items-center`}
				>
					<Item>
						<Link to='/' activeClassName='text-white'>
							Home
						</Link>
					</Item>
					<Item>
						<Link to='/about' activeClassName='text-white'>
							About
						</Link>
					</Item>
					<Item>
						<a className='nav-link' href='https://forms.gle/HYkoGbzwAR37pa3v9'>
							Apply
						</a>
					</Item>
					<Item>
						<a href='https://join.slack.com/t/blueprintatua/shared_invite/enQtOTEzMzE4ODEwMzU1LWFmMDdlMDE2YjNlYmJiMWZhZjQ4YWUxNTUyM2RiNTAzZDM5Njk1ZTQzZDYwYjJmNzM5NTMxMTQ1OGRjMzdiNzQ'>
							Join our Slack
						</a>
					</Item>
					<li className='mt-3 md:mt-0 bg-white border-2 rounded-lg transition-all duration-300 border-gray-800 text-gray-800 py-1 px-3 inline-block hover:bg-gray-800 hover:text-white hover:shadow-lg hover:border-gray-800 dark:text-gray-100 dark:bg-black dark:border-gray-300 dark-hover:border-white dark-hover:bg-white dark-hover:text-black'>
						<Link to='/contact'>Get in touch</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
