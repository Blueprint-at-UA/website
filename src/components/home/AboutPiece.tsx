import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const AboutPiece = () => {
	return (
		<div className='bg-light'>
			<Container className='py-7 animated fadeIn'>
				<h2 className='text-primary mt-4 d-none d-sm-none d-md-block'>
					Blueprint at UA strives to make technology accessible and useful for
					those who assist communities and promote public welfare.
				</h2>
				<p className='lead d-none d-block d-sm-block d-md-none text-primary'>
					Blueprint strives to make technology accessible and useful for those
					who assist communities and promote public welfare.
				</p>
				<p className='mt-3'>
					Blueprint at UA is a student organization at The University of Alabama
					committed to working with nonprofits, big and small, to take on their
					problems with modern solutions. Each semester, we create teams of 4 to
					5 talented students and use their combined skill to fix nonprofits'
					problems with solutions made through tech.
				</p>
				<Link to='/about'>Read more...</Link>
			</Container>
		</div>
	)
}

export default AboutPiece
