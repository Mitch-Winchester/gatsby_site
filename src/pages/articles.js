import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout, StyledLink } from '../components/layout'
import Seo from '../components/seo'

const ArticlePage = ({ data }) => {
    return (
        <Layout pageTitle="My Articles">
            {
                data.allDrupalNodeArtRec.nodeArticles.nodes.map(node => {
                    const slug = node.title.replaceAll(' ', '-')
                    return (
                    <article key={node.id}>
                        <h2>
                            <StyledLink to={`/article/${slug}`}>
                                {node.title}
                            </StyledLink>
                        </h2>
                        <p>
                            <strong>Author:</strong>&nbsp;&nbsp;
                            {node.author.displayName.charAt(0).toUpperCase()+node.author.displayName.slice(1)}    
                        </p>
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
            nodeArticles(first: 10) {
                nodes {
                    title
                    id
                    author {
                        displayName
                    }
                }
            }
        }
    }
`

export const Head = () => <Seo title="My Recipes" />

export default ArticlePage