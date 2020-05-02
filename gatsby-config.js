module.exports = {
	siteMetadata: {
		title: 'Blueprint at UA',
		description:
			"We're Blueprint at UA, a student organization at The University of Alabama that brings about social good through technology.",
		author: 'Blueprint at UA',
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Blueprint at UA`,
				short_name: `Blueprint`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `standalone`,
				icon: `src/images/icon.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
		'gatsby-plugin-typescript',
		'gatsby-plugin-postcss',
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: ['inter'],
				display: 'swap',
			},
		},
	],
}
