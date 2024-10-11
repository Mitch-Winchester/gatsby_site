import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout, StyledLink } from '../components/layout'
import Seo from '../components/seo'

const RecipePage = ({ data }) => {
    return (
        <Layout pageTitle="My Recipes">
            {
                data.allDrupalNodeArtRec.nodeRecipes.nodes.map(node => {
                    const slug = node.title.replaceAll(' ', '-')
                    return (
                    <article key={node.id}>
                        <h2>
                            <StyledLink to={`/recipe/${slug}`}>
                                {node.title}
                            </StyledLink>
                        </h2>
                        <p>
                            <strong>Difficulty:</strong>&nbsp;&nbsp;
                            {node.difficulty.charAt(0).toUpperCase()+node.difficulty.slice(1)}
                        </p>
                        <p dangerouslySetInnerHTML={{ __html: node.summary?.processed }}></p>
                    </article>
                    )
                })
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
                    summary {
                        processed
                    }
                }
            }
        }
    }
`

export const Head = () => <Seo title="My Recipes" />

export default RecipePage