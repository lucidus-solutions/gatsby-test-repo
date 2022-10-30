// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
        <Layout pageTitle="My About Page">
          <p>This is a page about me.</p>
        </Layout>
  )
}

export const Head = () => <Seo title="About Page" />
// Step 3: Export your component
export default AboutPage