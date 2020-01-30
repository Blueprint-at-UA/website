import React from "react"

import Layout from "../components/layout"
import Header from "../components/home/MainHeader"
import AboutPiece from "../components/home/AboutPiece"
import HomeColumns from "../components/home/HomeColumns"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <AboutPiece />
    <HomeColumns />
  </Layout>
)

export default IndexPage
