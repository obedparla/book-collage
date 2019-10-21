import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Vinieron a que les siguiera diciendo maricos?</h1>
    <p>AYYYYYYYYYY</p>
    <Link to="/">Go back to mariquisimos</Link>
  </Layout>
)

export default SecondPage
