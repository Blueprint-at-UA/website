import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Container, Button } from "react-bootstrap"
import Img from "gatsby-image"

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
    <div className="bg-white">
      <Container className="py-5 animated fadeIn">
        <div className="row py-3 mt-6">
          <div className="col-lg-5">
            <Img
              className="img-fluid"
              fluid={data.secondImage.childImageSharp.fluid}
            />
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div>
              <h2>Enabling nonprofits to do better work</h2>
              <div className="paragraph my-4">
                Whether you have an idea and just don't know how to execute it
                or want to see how technology can improve your organization,
                we're here for you.{" "}
                <b>Our job is to make your job easier through technology.</b>{" "}
                Regardless of your experience or knowledge of tech, we'll work
                with you to develop solutions that make you move{" "}
                <b>faster as an organization</b>.
              </div>
              <Link to="/about">
                <Button variant="success" size="lg">
                  Get in touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row py-3 mt-6">
          <div className="col-lg-7 d-flex align-items-center">
            <div>
              <h2>A new opportunity for UA students</h2>
              <div className="paragraph my-4">
                Whether you're looking to improve your technical skills or just
                want something fun to do during your free time, Blueprint at UA
                is the place for you. We give you the unique opportunity to
                build <b>real apps used by real people</b> in production. Best
                of all, they're all open source, so you can put them on your
                resume. 😉 Come join us in creating a one-of-a-kind opportunity
                for The University of Alabama.
              </div>
              <Button
                variant="primary"
                size="lg"
                href="https://forms.gle/HYkoGbzwAR37pa3v9"
              >
                Apply now
              </Button>
            </div>
          </div>
          <div className="col-lg-5">
            <Img
              className="img-fluid"
              fluid={data.firstImage.childImageSharp.fluid}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HomeColumns
