//Step 1: Import React
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

//Step 2: Define your ocmponent
const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>
                Hi there! My name is Mitch Winchester and I'm the proud creator of this site, 
                which I built following the Gatsby Tutorial. 
            </p>
            <p>
                After setting up the Home, About, and Blog pages, I added a link to my first web
                app! Valheim Companion functions as an interactive wiki for the video game
                Valheim. It currently contains recipes for the food and mead items, as well as
                some useful information for farming.
            </p>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

//Step 3: Export your component
export default AboutPage