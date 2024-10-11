// Step 1: Import React
import * as React from 'react'
import styled from 'styled-components'
import { Layout } from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const ImageWrapper = styled.div`
  border-radius: 30px;
  overflow: hidden;
  margin: 2rem;

  @media (max-width: 768px) {
    margin: 1.5rem;
  }

  @media (max-width: 576px) {
    margin: 1rem;
  }
`;

// Step 2: Define your component
const HomePage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h4 style={{textAlign: 'center'}}>Welcome to my Gatsby Page!</h4>
      <ImageWrapper>
        <StaticImage
          alt="Marco, a black and white Pomsky, laying in the park"
          src="../../static/images/marco_park.jpg"
          aspectRatio={3/4}
        />
      </ImageWrapper>
      <div>
        <p> </p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default HomePage