import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ArticlePage = ({ data }) => {
    return (
        <Layout pageTitle="My Articles">
            {
                data.allDrupalNodeArtRec.nodeArticles.nodes.map(node => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/article/${node.title}`}>
                                {node.title}
                            </Link>
                        </h2>
                    </article>
                ))
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
                }
            }
        }
    }
`

export const Head = () => <Seo title="My Recipes" />

export default ArticlePage