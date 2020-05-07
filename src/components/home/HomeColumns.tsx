import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Container, Button } from 'react-bootstrap'
import Img from 'gatsby-image'

const query = graphql`
	query {
		firstImage: file(relativePath: { eq: "unlock.png" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
		secondImage: file(relativePath: { eq: "directions.png" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
	}
`

const HomeColumns = () => {
	const data = useStaticQuery(query)

	return (
		<div className='bg-white py-20 dark:bg-gray-900'>
			<div className='container mx-auto py-10 px-5 flex flex-wrap flex-col items-center md:flex-row md:content-center md:items-center md:justify-center md:flex-no-wrap space-x-4'>
				<div className='w-full mb-8 max-w-sm md:mb-0 md:hidden'>
					<Img fluid={data.secondImage.childImageSharp.fluid} />
				</div>
				<div className='w-full md:w-2/3 lg:pr-10'>
					<h2 className='text-3xl text-black dark:text-white'>
						Enabling nonprofits to do better work.
					</h2>
					<p className='mt-2 dark:text-gray-100'>
						Whether you have an idea and don't know how to excute it or want to
						see how technology can improve your organization, we're here for
						you. <b>Our job is to make your job easier using technology.</b>{' '}
						Regardless of your experience or knowledge of tech, we'll work with
						you to develop solutions that make you move{' '}
						<b>faster as an organization</b>.
					</p>
					<Link
						to='/about'
						className='inline-block border-2 text-primary text-gray-800 border-primary hover:bg-primary hover:text-white transition-all duration-300 text-md rounded-lg mt-6 px-8 py-3 bg-white hover:shadow-xl dark:bg-gray-900'
					>
						Get in touch
					</Link>
				</div>
				<div className='hidden md:block md:mt-0 md:p0 md:w-1/3 md:max-w-lg'>
					<Img fluid={data.secondImage.childImageSharp.fluid} />
				</div>
			</div>
			<div className='container mx-auto py-10 px-5 flex flex-wrap flex-col items-center md:flex-no-wrap md:flex-row md:content-center md:items-center md:justify-center space-x-4'>
				<div className='w-full max-w-xs mb-8 md:max-w-full md:mb-0 md:w-1/3 lg:px-10'>
					<Img fluid={data.firstImage.childImageSharp.fluid} />
				</div>
				<div className='w-full md:w-2/3 lg:pr-10'>
					<h2 className='text-3xl text-black dark:text-white'>
						A new opportunity for UA students
					</h2>
					<p className='mt-2 dark:text-gray-100'>
						Whether you're looking to improve your technical skills or just want
						something fun to do during your free time, Blueprint at UA is the
						place for you. We give you the unique opportunity to build{' '}
						<b>real apps that are used by real people</b> Best of all, they're
						all open source, so you can put them on your resume. 😉 Come help us
						create a one-of-a-kind opportunity for The University of Alabama.
					</p>
					<Link
						to='/about'
						className='inline-block border-2 text-primary text-gray-800 border-primary hover:bg-primary hover:text-white transition-all duration-300 text-md rounded-lg mt-6 px-8 py-3 bg-white hover:shadow-xl dark:bg-gray-900'
					>
						Learn more
					</Link>
				</div>
			</div>
		</div>
	)
}

export default HomeColumns
