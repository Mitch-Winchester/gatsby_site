import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const RecipePage = ({ data }) => {
    return (
        <Layout pageTitle="My Recipes">
            {
                data.allDrupalNodeArtRec.nodeRecipes.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/recipe/${node.title}`}>
                                {node.title}
                            </Link>
                        </h2>
                        <p>Difficulty: {node.difficulty}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allDrupalNodeArtRec {
            nodeRecipes(first: 10) {
                nodes {
                    title
                    id
                    difficulty
                }
            }
        }
    }
`

export const Head = () => <Seo title="My Recipes" />

export default RecipePage